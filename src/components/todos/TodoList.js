import React from "react";
import TodoItem from "../todos/TodoItem";

const TodoList = ({ title, listItems }) => {
  let content;

  if (listItems.length === 0) {
    content = <p className="center">Nothing to show ..</p>;
  } else {
    content = (
      <ul className="todo-list">
        {listItems.map((item) => (
          <TodoItem key={item.id} todo={item} />
        ))}
      </ul>
    );
  }

  return (
    <div className="todo-list-container">
      <h2 className="list-title">{title} </h2>
      {content}
    </div>
  );
};

export default TodoList;
