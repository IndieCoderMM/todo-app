import Todo from './todo.js';

export const addNewTask = ({ task, list }) => {
  const index = list.length;
  const todo = new Todo({ task: task, index: index });
  list.push(todo);
};

export const deleteTask = ({ index, list }) => {
  if (index >= list.length) return;
  for (let i = index + 1; i < list.length; i++) {
    list[i].index -= 1;
  }
  list.splice(index, 1);
};

export const editTask = ({ todo: { task, index, completed }, list }) => {
  if (index >= list.length) return;
  list[index] = new Todo({ task: task, index: index, completed: completed });
};
