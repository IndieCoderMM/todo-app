export default class Todo {
  constructor({ task, index, completed = false }) {
    this.task = task;
    this.completed = completed;
    this.index = index;
  }
}
