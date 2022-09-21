import React, { useRef, useEffect } from "react";
import useToast from "./../../hooks/useToast";
import { useAddTodoMutation } from "../../store/services/todosApi";

import Button from "./../ui/Button";

const AddTodo = () => {
  const todoInputRef = useRef("");
  const [addTodo, request] = useAddTodoMutation();
  const { updateState } = useToast({
    ...request,
    loadingMsg: "Adding Todo ...",
    successMsg: "Added Successfully!",
  });

  useEffect(() => {
    updateState({ ...request });
  }, [request, updateState]);

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
      <input type="text" name="todo" ref={todoInputRef} autoFocus />
      <Button ml={"10px"}>Add Todo</Button>
    </form>
  );
};

export default AddTodo;
