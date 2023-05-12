import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state);
  const [sort, setSort] = useState("active");
  return (
    <div>
      <div>
        <button onClick={() => setSort("active")}>Active</button>
        <button onClick={() => setSort("completed")}>Completed</button>
        <button onClick={() => setSort("all")}>All</button>
      </div>
      <ul>
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
