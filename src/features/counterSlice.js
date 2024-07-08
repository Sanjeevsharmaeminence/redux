// src/features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { inc, dcr } from '../functions/index'; // Import helper functions

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0, // Initial state value
  reducers: {
    increment: (state) => inc(state), // Increment using helper function
    decrement: (state) => dcr(state), // Decrement using helper function
    reset: () => 0, // Reset to zero
    incrementByAmount: (state, action) => state + action.payload, // Increment by a specific amount
    decrementByAmount: (state, action) => state - action.payload, // Decrement by a specific amount
  },
});

// Export actions
export const { increment, decrement, reset, incrementByAmount, decrementByAmount } = counterSlice.actions;

// Export reducer
export default counterSlice.reducer;
