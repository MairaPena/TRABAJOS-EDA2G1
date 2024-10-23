import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementBy, decrement } from './counterSlice';

const Counter = () => {
  const counter = useSelector((state) => state.counter.value); // Get current counter value from the Redux store
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0); // For increment by specific value

  const handleIncrementBy = () => {
    dispatch(incrementBy(Number(incrementAmount))); // Dispatch incrementBy with a value
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={handleIncrementBy}>Increment By Value</button>
        <input
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Counter;
