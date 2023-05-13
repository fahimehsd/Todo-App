import React from "react";
import Todos from "./components/Todos";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="app">
      <h1>Todo App</h1>
      <Todos />
      <TodoList />
    </div>
  );
};

export default App;
