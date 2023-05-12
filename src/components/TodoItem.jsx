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
    <li key={id}>
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item}
        onChange={(e) => update(id, inputRef.current.value, e)}
      />
      <button onClick={() => changeFocus()}>Edit</button>
      <button onClick={() => dispatch(completedTodos(id))}>Complete</button>
      <button onClick={() => dispatch(removeTodos(id))}>Delete</button>
    </li>
  );
};

export default TodoItem;
