import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement } from './counterSlice';


const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log("State", count);
  return (
    <div style={{
      width: "50%",
      margin: "0 auto"
    }}>
      <button onClick={() => dispatch(increment())}>Increment</button>
        <span style={{padding: "2em"}}>{count}</span>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter;
