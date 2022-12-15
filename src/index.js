import './index.css';
import { addNewTask, deleteTask } from './task-manager.js';
import clearAllCompleted from './clear-all.js';
import updateTodoList from './update-list.js';
import reorderTodoList from './reorder-list.js';

const todoContainer = document.querySelector('#todo-container');
const newTaskInput = document.querySelector('#new-task-input');
const clearBtn = document.querySelector('#clear-btn');
const clock = document.querySelector('#clock');
const date = document.querySelector('#date');

const LOCAL_KEY = 'microtasks-data';

const getLocalData = () => {
  let todoList = [];
  const localData = localStorage.getItem(LOCAL_KEY);
  if (localData !== null) {
    todoList = JSON.parse(localData);
  }
  return todoList;
};

/* -------Main Program-----------*/
const todoList = getLocalData();
updateTodoList(todoList, todoContainer);

document.addEventListener('click', (e) => {
  // handling remove buttons
  const removeBtn = e.target.closest('.remove-btn');
  if (removeBtn === null) return;
  const idToRemove = removeBtn.dataset.index;
  deleteTask({ index: parseInt(idToRemove, 10), list: todoList });
  updateTodoList(todoList, todoContainer);
});

document.addEventListener('keyup', (e) => {
  // adding new task on Enter
  if (e.key === 'Enter') {
    const newTask = newTaskInput.value.trim();
    newTaskInput.value = '';
    if (newTask.length === 0) return;
    addNewTask({ task: newTask, list: todoList });
    updateTodoList(todoList, todoContainer);
  }
});

document.addEventListener('change', () => updateTodoList(todoList, todoContainer));

clearBtn.addEventListener('click', () => {
  clearAllCompleted(todoList);
  updateTodoList(todoList, todoContainer);
});

date.textContent = new Date().toLocaleDateString('en-US');
setInterval(() => {
  clock.textContent = new Date().toLocaleTimeString('en-US');
}, 1000);

// * Drag and Drop Feature
let dragItem;
let dropOn;

document.addEventListener('dragstart', (e) => {
  dragItem = e.target.closest('.todo-item');
});

todoContainer.addEventListener('dragover', (e) => e.preventDefault());

document.addEventListener('dragenter', (e) => {
  dropOn = e.target.closest('.todo-item');
});

document.addEventListener('dragend', () => {
  if (dragItem === null) return;
  dragItem.draggable = false;
});

document.addEventListener('drop', (e) => {
  e.preventDefault();
  if (dragItem === null || dropOn === null) return;
  reorderTodoList(
    todoList,
    parseInt(dragItem.dataset.index, 10),
    parseInt(dropOn.dataset.index, 10),
  );
  updateTodoList(todoList, todoContainer);
});
