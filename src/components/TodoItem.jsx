import React, { useRef } from "react";
import { completedTodos, removeTodos, updateTodos } from "../redux/reducer";
import { useDispatch } from "react-redux";

const TodoItem = ({ id, item }) => {
  const dispatch = useDispatch();
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

  return (
    <li key={id} className="card">
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item}
        onKeyPress={(e) => update(id, inputRef.current.value, e)}
      />
      <div className="li-btns">
        <button className="li-btn edit" onClick={() => changeFocus()}>
          Edit
        </button>
        <button
          className="li-btn completed"
          onClick={() => dispatch(completedTodos(id))}
        >
          Complete
        </button>
        <button
          className="li-btn delete"
          onClick={() => dispatch(removeTodos(id))}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
