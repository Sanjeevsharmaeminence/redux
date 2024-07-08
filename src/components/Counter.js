// src/components/Counter.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset, incrementByAmount, decrementByAmount } from '../features/counterSlice'; // Import actions

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter); // Access counter state

  const [amount, setAmount] = useState(1); // State for the specified amount

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(Number(amount))); // Convert amount to number
  };

  const handleDecrementByAmount = () => {
    dispatch(decrementByAmount(Number(amount))); // Convert amount to number
  };

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <span>Current Count: {count}</span>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>

      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleIncrementByAmount}>Increment by Amount</button>
        <button onClick={handleDecrementByAmount}>Decrement by Amount</button>
      </div>
    </div>
  );
};

export default Counter;
