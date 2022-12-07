import './index.css';
import { addNewTask, deleteTask, updateTask } from './task-manager.js';
import { updateTodoStatus } from './update-status.js';

const todoContainer = document.querySelector('#todo-container');
const newTaskInput = document.querySelector('#new-task-input');

const LOCAL_KEY = 'microtasks-data';
const TRASH_ICON = '<i class="fa-solid fa-trash"></i>';
const DRAG_ICON = '<i class="fa-solid fa-ellipsis-vertical"></i>';

const getLocalData = () => {
  let todoList = [];
  const localData = localStorage.getItem(LOCAL_KEY);
  if (localData !== null) {
    todoList = JSON.parse(localData);
  }
  return todoList;
};

let todoList = getLocalData();

const updateLocalData = (todoList) => {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(todoList));
};

const makeElement = (tag, className, todoIndex) => {
  const elem = document.createElement(tag);
  elem.classList.add(className);
  elem.dataset.index = todoIndex;
  return elem;
};

const makeTodoItem = (todo) => {
  // Creating elements for each todo
  const li = makeElement('li', 'todo-item', todo.index);
  const checkBox = makeElement('input', 'todo-check', todo.index);
  const taskInput = makeElement('input', 'task-input', todo.index);
  const removeBtn = makeElement('button', 'remove-btn', todo.index);
  const dragBtn = makeElement('button', 'drag-btn', todo.index);

  checkBox.type = 'checkbox';
  checkBox.checked = todo.completed;
  checkBox.addEventListener('change', (e) => {
    updateTodoStatus({
      index: parseInt(e.target.dataset.index),
      completed: e.target.checked,
      list: todoList,
    });
    updateTodoList(todoList);
  });
  taskInput.value = todo.task;
  if (todo.completed) taskInput.style.textDecoration = 'line-through';
  taskInput.addEventListener('change', (e) => {
    updateTask({
      task: e.target.value,
      index: e.target.dataset.index,
      list: todoList,
    });
    updateTodoList(todoList);
  });
  removeBtn.innerHTML = TRASH_ICON;
  dragBtn.innerHTML = DRAG_ICON;

  li.appendChild(checkBox);
  li.appendChild(taskInput);
  li.appendChild(removeBtn);
  li.appendChild(dragBtn);
  return li;
};

const updateTodoList = (todoList) => {
  // update display and storage
  todoContainer.textContent = '';
  todoList.sort((a, b) => a.index - b.index);
  todoList.forEach((todo) => {
    const item = makeTodoItem(todo);
    todoContainer.appendChild(item);
  });
  updateLocalData(todoList);
};

/* -------Main Program-----------*/

updateTodoList(todoList);

document.addEventListener('click', (e) => {
  // handling remove buttons
  const removeBtn = e.target.closest('.remove-btn');
  if (removeBtn === null) return;
  const idToRemove = removeBtn.id.split('-')[1];
  deleteTask({ index: parseInt(idToRemove, 10), list: todoList });
  updateTodoList(todoList);
});

document.addEventListener('keyup', (e) => {
  // adding new task on Enter
  if (e.key === 'Enter') {
    const newTask = newTaskInput.value.trim();
    newTaskInput.value = '';
    if (newTask.length === 0) return;
    addNewTask({ task: newTask, list: todoList });
    updateTodoList(todoList);
  }
});

// document.addEventListener('change', (e) => {
//   // handling task updates
//   const item = e.target.closest('.todo-item');
//   if (item === null) return;
//   const task = item.querySelector('.task').value.trim();
//   if (task.length === 0) {
//     updateTodoList(todoList);
//     return;
//   }
//   const completed = item.querySelector('.todo-check').checked;
//   updateTask({ task, index: item.id, list: todoList });
//   updateTodoList(todoList);
// });
