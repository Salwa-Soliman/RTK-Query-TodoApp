import React from "react";
import { useGetTodosQuery } from "../../store/services/todosApi";
import TodoList from "./TodoList";
import Spinner from "../ui/Spinner";
import TodoItem from "./TodoItem";

const Todos = () => {
  const { data: todos, isError, isLoading } = useGetTodosQuery();
  const lists = { completed: [], todo: [] };

  if (isLoading) return <Spinner />;

  if (isError) return <h3 className="center">Error Fetching Data ...</h3>;

  if (todos.length === 0) {
    return (
      <h3 className="center">
        Couldn't find any Todos <br /> Start adding Some!
      </h3>
    );
    
  } else {
    todos.forEach((todo) =>
      todo.completed ? lists.completed.push(todo) : lists.todo.push(todo)
    );
  }

  return (
    <div className="todos">
      {Object.keys(lists).map((list) => (
        <TodoList key={list} title={list} listItems={lists[list]} />
      ))}
    </div>
  );
};

export default Todos;
