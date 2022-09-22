import React, { useState, useEffect } from "react";
import { useGetTodosQuery } from "../../store/services/todosApi";
import TodoList from "./TodoList";
import Spinner from "../ui/Spinner";

const Todos = () => {
  const { data: todos, isLoading, isSuccess } = useGetTodosQuery();
  // const lists = { completed: [], todo: [] };
  const [lists, setLists] = useState({ completed: [], todo: [] });

  useEffect(() => {
    if (!isLoading && isSuccess && todos.length) {
      const completedTodos = [],
        pendingTodos = [];
      todos.forEach((todo) =>
        todo.completed ? completedTodos.push(todo) : pendingTodos.push(todo)
      );
      setLists((prev) => ({ completed: completedTodos, todo: pendingTodos }));
    }
  }, [isLoading, isSuccess, todos]);
  if (isLoading) return <Spinner />;

  if (todos.length === 0) {
    return (
      <h3 className="center">
        Couldn't find any Todos <br /> Start adding Some!
      </h3>
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
