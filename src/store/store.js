// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice'; // Import counter reducer
import todoReducer from '../features/todoSlice'; // Import todo reducer

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer, // Register todo reducer
  },
});
