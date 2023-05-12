import { configureStore } from "@reduxjs/toolkit";
import { todos } from "./reducer";

const store = configureStore({
  reducer: todos
});
export default store;
