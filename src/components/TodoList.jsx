import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state);
  const [sort, setSort] = useState("active");
  return (
    <div className="todos">
      <div className="btns">
        <button className="btn active" onClick={() => setSort("active")}>
          Active
        </button>
        <button className="btn completed" onClick={() => setSort("completed")}>
          Completed
        </button>
        <button className="btn all" onClick={() => setSort("all")}>
          All
        </button>
      </div>
      <ul className="todo-list">
        {todos.length > 0 && sort === "active"
          ? todos.map(({ id, item, completed }) => {
              return completed === false && <TodoItem id={id} item={item} />;
            })
          : sort === "completed"
          ? todos.map(({ id, item, completed }) => {
              return completed === true && <TodoItem id={id} item={item} />;
            })
          : todos.map(({ id, item }) => <TodoItem id={id} item={item} />)}
      </ul>
    </div>
  );
};

export default TodoList;
