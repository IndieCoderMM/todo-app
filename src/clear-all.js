import { deleteTask } from './task-manager.js';

const clearAllCompleted = (todoList) => {
  const completedItems = todoList.filter((item) => item.completed);
  completedItems.forEach((todo) => deleteTask({ index: todo.index, list: todoList }));
};

export default clearAllCompleted;
