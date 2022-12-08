const updateTodoStatus = ({ index, completed, list }) => {
  if (index >= list.length) return;
  list[index].completed = completed;
};

export default updateTodoStatus;
