import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const countValue = useSelector(state => state);

  console.log(countValue.count);
  const incrementCounter = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrementCounter = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <button onClick={decrementCounter}>-</button>
      <span>{countValue.count}</span>
      <button onClick={incrementCounter}>+</button>
    </div>
  );
};

export default Counter;
