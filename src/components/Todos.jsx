import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../redux/reducer";
import TodoList from "./TodoList";

const Todos = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
      />
      <button
        className="add-btn"
        onClick={() =>
          dispatch(
            addTodos({
              id: Math.floor(Math.random() * 1000),
              item: todo,
              completed: false
            })
          )
        }
      >
        Add
      </button>
    </div>
  );
};

export default Todos;
