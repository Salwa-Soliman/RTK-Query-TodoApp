import React from "react";
import { useGetTodosQuery } from "../../store/services/todosApi";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { data: todos, isError, isLoading } = useGetTodosQuery();

  if (isLoading) return <h1>Loading ...</h1>;
  if (isError) return <h1>Error Fetching Data ...</h1>;

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
