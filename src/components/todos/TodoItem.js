import React, { useState, useEffect } from "react";
import useToast from "./../../hooks/useToast";
import {
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from "../../store/services/todosApi";

import Button from "./../ui/Button";

const TodoItem = ({ todo }) => {
  const [isCompleted, setIsCompleted] = useState(todo.completed);

  const [updateTodo, updateReq] = useUpdateTodoMutation();
  const { updateState: setUpdateReqState } = useToast({
    ...updateReq,
    loadingMsg: "Updating Todo ...",
    successMsg: "Updated Successfully!",
  });

  const [deleteTodo, deleteReq] = useDeleteTodoMutation();
  const { updateState: setDeleteReqState } = useToast({
    ...deleteReq,
    loadingMsg: "Deleting Todo ...",
    successMsg: "Deleted Successfully!",
  });

  useEffect(() => {
    setUpdateReqState({ ...updateReq });
  }, [updateReq, setUpdateReqState]);

  useEffect(() => {
    setDeleteReqState({ ...deleteReq });
  }, [deleteReq, setDeleteReqState]);

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
