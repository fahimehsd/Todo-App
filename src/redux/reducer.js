const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];
const todoSlicer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    }
  }
});

export const { addTodos } = todoSlicer.actions;
export const todos = todoSlicer.reducer;
