// src/features/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  filter: 'all', // 'all', 'completed', 'incomplete'
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, setFilter } = todoSlice.actions;
export default todoSlice.reducer;
