import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, removeTodos, updateTodos } from "../redux/reducer";

const Todos = () => {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };
  const update = (id, value, e) => {
    if (e.which === 13) {
      dispatch(updateTodos({ id, item: value }));
      inputRef.current.disabled = true;
    }
  };

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
          <li key={id}>
            <textarea
              ref={inputRef}
              disabled={inputRef}
              defaultValue={item}
              onChange={(e) => update(id, inputRef.current.value, e)}
            />
            <button onClick={() => changeFocus()}>Edit</button>
            <button onClick={() => dispatch(removeTodos(id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
