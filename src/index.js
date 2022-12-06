import './index.css';

const todoContainer = document.querySelector('#todo-container');

const todoList = [
  {
    description: 'Request a code review',
    completed: false,
    index: 3,
  },
  {
    description: 'Set up project',
    completed: true,
    index: 0,
  },
  {
    description: 'Fix linter errors',
    completed: false,
    index: 2,
  },
  {
    description: 'Build an awesome app',
    completed: false,
    index: 1,
  },
];

const getListItem = (todo) => {
  const li = document.createElement('li');
  const checkBox = document.createElement('input');
  const input = document.createElement('input');
  const removeBtn = document.createElement('button');
  const dragBtn = document.createElement('button');
  checkBox.setAttribute('type', 'checkbox');
  checkBox.checked = todo.completed;
  input.value = todo.description;
  if (todo.completed) input.style.textDecoration = 'line-through';
  removeBtn.id = `remove-${todo.index}`;
  dragBtn.id = `drag-${todo.index}`;
  removeBtn.classList.add('remove-btn');
  dragBtn.classList.add('drag-btn');
  // Button icons
  removeBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  dragBtn.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';

  li.appendChild(checkBox);
  li.appendChild(input);
  li.appendChild(removeBtn);
  li.appendChild(dragBtn);
  return li;
};

todoList.sort((a, b) => a.index - b.index);
todoList.forEach((todo) => {
  const item = getListItem(todo);
  todoContainer.appendChild(item);
});
