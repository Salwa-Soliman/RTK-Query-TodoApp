export default class Todo {
  id;
  title;
  completed;

  constructor(title) {
    this.id = new Date().getTime().toString();
    this.completed = false;
    this.title = title;
  }
}
