import React from "react";
import TodoItem from "../todos/TodoItem";

const TodoList = ({ title, listItems }) => {
  return (
    <ul className="todo-list">
      <h3 className="list-title">{title}</h3>
      {listItems.map((item) => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </ul>
  );
};

export default TodoList;
