import React, { useRef } from "react";
import Button from "./../ui/Button";
import Todo from "../../models/todo";

import { useAddTodoMutation } from "../../store/services/todosApi";

const AddTodo = () => {
  const todoInputRef = useRef("");
  const [addTodo] = useAddTodoMutation();

  const submitFormHandler = (event) => {
    event.preventDefault();
    const inputValue = todoInputRef.current.value.trim();

    if (inputValue) {
      const newTodo = new Todo(inputValue);
      console.log(newTodo);
      addTodo(new Todo(newTodo));
      todoInputRef.current.value = "";
    }
  };
  return (
    <form onSubmit={submitFormHandler} className="todo-form">
      <input type="text" name="todo" ref={todoInputRef} />
      <Button ml={"10px"}>Add Todo</Button>
    </form>
  );
};

export default AddTodo;
