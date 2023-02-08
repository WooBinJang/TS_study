import React from "react";
import { useTodosDispatch, Todo } from "../../contexts/TodosContext";
import "./TodoItem.css";

export type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useTodosDispatch();
  const onRemove = () => {
    dispatch({ type: "REMOVE", id: todo.id });
  };
  const onToggle = () => {
    dispatch({ type: "TOGGLE", id: todo.id });
  };
  return (
    <li className={`TodoItem ${todo.done ? "done" : ""}`}>
      <span className="text" onClick={onToggle}>
        {todo.text}
      </span>
      <span className="remove" onClick={onRemove}>
        (X)
      </span>
    </li>
  );
};

export default TodoItem;
