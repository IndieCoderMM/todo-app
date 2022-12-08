const reorderTodoList = (todoList, fromIndex, toIndex) => {
  const moveUp = fromIndex - toIndex > 0;
  if (moveUp) {
    for (let i = toIndex; i < fromIndex; i += 1) {
      todoList[i].index = todoList[i + 1].index;
    }
    todoList[fromIndex].index = toIndex;
  } else {
    for (let i = toIndex; i > fromIndex; i -= 1) {
      todoList[i].index = todoList[i - 1].index;
    }
    todoList[fromIndex].index = toIndex;
  }
};

export default reorderTodoList;
