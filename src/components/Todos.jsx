import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "../redux/reducer";

const Todos = () => {
  const todos = useSelector((state) => state);

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
      <br />
      <ul>
        {todos.map(({ id, item }) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
