import { updateTodoStatus } from './update-status.js';
import { updateTask } from './task-manager.js';

const TRASH_ICON = '<i class="fa-solid fa-trash"></i>';
const DRAG_ICON = '<i class="fa-solid fa-ellipsis-vertical"></i>';

const makeElement = (tag, className, todoIndex) => {
  const elem = document.createElement(tag);
  elem.classList.add(className);
  elem.dataset.index = todoIndex;
  return elem;
};

export const makeTodoItem = (todo, todoList) => {
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
  });
  taskInput.value = todo.task;
  if (todo.completed) taskInput.style.textDecoration = 'line-through';
  taskInput.addEventListener('change', (e) => {
    const task = e.target.value.trim();
    if (task.length === 0) return;
    updateTask({
      task: e.target.value,
      index: e.target.dataset.index,
      list: todoList,
    });
  });
  removeBtn.innerHTML = TRASH_ICON;
  dragBtn.innerHTML = DRAG_ICON;

  li.appendChild(checkBox);
  li.appendChild(taskInput);
  li.appendChild(removeBtn);
  li.appendChild(dragBtn);
  return li;
};
