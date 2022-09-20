export default class Todo {
  id;
  title;
  constructor(title) {
    console.log(title);
    this.id = new Date().getTime().toString();
    this.title = title;
  }
}
