const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];
const todoSlicer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    }
  }
});

export const { addTodos, removeTodos } = todoSlicer.actions;
export const todos = todoSlicer.reducer;
