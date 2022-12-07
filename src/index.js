import './index.css';
import { addNewTask, deleteTask } from './task-manager.js';
import { makeTodoItem } from './todo-maker.js';

const todoContainer = document.querySelector('#todo-container');
const newTaskInput = document.querySelector('#new-task-input');
const clearBtn = document.querySelector('#clear-btn');

const LOCAL_KEY = 'microtasks-data';

const getLocalData = () => {
  let todoList = [];
  const localData = localStorage.getItem(LOCAL_KEY);
  if (localData !== null) {
    todoList = JSON.parse(localData);
  }
  return todoList;
};

const updateTodoList = (todoList) => {
  // update display and storage
  todoContainer.textContent = '';
  todoList.sort((a, b) => a.index - b.index);
  todoList.forEach((todo) => {
    const item = makeTodoItem(todo, todoList);
    todoContainer.appendChild(item);
  });
  localStorage.setItem(LOCAL_KEY, JSON.stringify(todoList));
};

/* -------Main Program-----------*/
let todoList = getLocalData();
updateTodoList(todoList);

document.addEventListener('click', (e) => {
  // handling remove buttons
  const removeBtn = e.target.closest('.remove-btn');
  if (removeBtn === null) return;
  const idToRemove = removeBtn.dataset.index;
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

document.addEventListener('change', () => updateTodoList(todoList));

// clearBtn.addEventListener("click", ()=> {
//   clearCompletedTodo(todoList);
// })
