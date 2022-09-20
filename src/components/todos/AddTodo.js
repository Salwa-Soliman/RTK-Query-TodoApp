import React, { useRef } from "react";
import Button from "./../ui/Button";
// import Todo from "../../models/todo";

import { useAddTodoMutation } from "../../store/services/todosApi";

const AddTodo = () => {
  const todoInputRef = useRef("");
  const [addTodo] = useAddTodoMutation();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const inputValue = todoInputRef.current.value.trim();

    if (inputValue) {
      addTodo({
        id: new Date().getTime().toString(),
        title: inputValue,
        completed: false,
      });

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
