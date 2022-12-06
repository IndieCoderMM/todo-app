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
  checkBox.setAttribute('type', 'checkbox');
  checkBox.checked = todo.completed;
  input.value = todo.description;
  li.appendChild(checkBox);
  li.appendChild(input);
  return li;
};

todoList.sort((a, b) => a.index - b.index);
todoList.forEach((todo) => {
  const item = getListItem(todo);
  todoContainer.appendChild(item);
});
