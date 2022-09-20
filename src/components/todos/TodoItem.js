import React, { useState } from "react";
import {
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from "../../store/services/todosApi";
import Button from "./../ui/Button";

const TodoItem = ({ todo }) => {
  const [isCompleted, setIsCompleted] = useState(todo.completed);
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const toggleTodoHandler = () => {
    updateTodo({ ...todo, completed: !isCompleted });
    setIsCompleted((prevState) => !prevState);
  };

  const deleteTodoHandler = () => {
    deleteTodo(todo);
  };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        id={`todo-${todo.id}`}
        checked={isCompleted}
        onChange={toggleTodoHandler}
      />
      <label htmlFor={`todo-${todo.id}`}>{todo.title}</label>
      <Button variant={"ghost"} ml={"10px"} onClick={deleteTodoHandler}>
        ❌
      </Button>
    </li>
  );
};

export default TodoItem;
