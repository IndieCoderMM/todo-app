import './index.css';
import { addNewTask, deleteTask, editTask } from './task_manager.js';

const todoContainer = document.querySelector('#todo-container');
const newTaskInput = document.querySelector('#new-task-input');

const LOCAL_KEY = 'microtasks-data';
const TRASH_ICON = `<i class="fa-solid fa-trash"></i>`;
const DRAG_ICON = `<i class="fa-solid fa-ellipsis-vertical"></i>`;

const getLocalData = () => {
  let todoList = [];
  const localData = localStorage.getItem(LOCAL_KEY);
  if (localData !== null) {
    todoList = JSON.parse(localData);
  }
  return todoList;
};

const updateLocalData = (todoList) => {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(todoList));
};

const makeButton = (id, className, icon) => {
  const btn = document.createElement('button');
  btn.id = id;
  btn.classList.add(className);
  btn.innerHTML = icon;
  return btn;
};

const getListItem = (todo) => {
  const li = document.createElement('li');
  const checkBox = document.createElement('input');
  const input = document.createElement('input');
  const removeBtn = makeButton(`rm-${todo.index}`, 'remove-btn', TRASH_ICON);
  const dragBtn = makeButton(`dg-${todo.index}`, 'drag-btn', DRAG_ICON);
  checkBox.setAttribute('type', 'checkbox');
  checkBox.classList.add('todo-check');
  checkBox.checked = todo.completed;
  input.classList.add('task');
  input.value = todo.task;
  if (todo.completed) input.style.textDecoration = 'line-through';
  li.id = todo.index;
  li.classList.add('todo-item');
  li.appendChild(checkBox);
  li.appendChild(input);
  li.appendChild(removeBtn);
  li.appendChild(dragBtn);
  return li;
};

const updateTodoList = (todoList) => {
  todoContainer.textContent = '';
  todoList.sort((a, b) => a.index - b.index);
  todoList.forEach((todo) => {
    const item = getListItem(todo);
    todoContainer.appendChild(item);
  });
  updateLocalData(todoList);
};

let todoList = getLocalData();
updateTodoList(todoList);

document.addEventListener('click', (e) => {
  const removeBtn = e.target.closest('.remove-btn');
  if (removeBtn === null) return;
  const idToRemove = removeBtn.id.split('-')[1];
  deleteTask({ index: parseInt(idToRemove), list: todoList });
  updateTodoList(todoList);
});

document.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    const newTask = newTaskInput.value.trim();
    newTaskInput.value = '';
    if (newTask.length > 0) {
      addNewTask({ task: newTask, list: todoList });
      updateTodoList(todoList);
    }
  }
});

document.addEventListener('change', (e) => {
  const item = e.target.closest('.todo-item');
  if (item === null) return;
  const completed = item.querySelector('.todo-check').checked;
  const task = item.querySelector('.task').value;
  editTask({
    todo: { task: task, index: item.id, completed: completed },
    list: todoList,
  });
  updateTodoList(todoList);
});
