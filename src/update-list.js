import makeTodoItem from './todo-maker.js';

const LOCAL_KEY = 'microtasks-data';

export const updateTodoList = (todoList, todoContainer) => {
  // update display and storage
  todoContainer.textContent = '';
  todoList.sort((a, b) => a.index - b.index);
  todoList.forEach((todo) => {
    const item = makeTodoItem(todo, todoList);
    todoContainer.appendChild(item);
  });
  localStorage.setItem(LOCAL_KEY, JSON.stringify(todoList));
};
