import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../redux/reducer";

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
        <svg
          fill="#ffffff"
          width="50px"
          height="50px"
          viewBox="0 0 32.00 32.00"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
          strokeWidth="0.00032"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M9,17h6v6a1,1,0,0,0,2,0V17h6a1,1,0,0,0,0-2H17V9a1,1,0,0,0-2,0v6H9a1,1,0,0,0,0,2Z"></path>{" "}
          </g>
        </svg>
      </button>
    </div>
  );
};

export default Todos;
