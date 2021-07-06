import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  //give setCount a value to update state
  const incHandler = () => {
    setCount(count + 1);
  };
  //for some async scenario where you need true value...
  //you can also give a function that returns value to setCount:
  const decHandler = () => {
    setCount((i) => {
      return i - 1;
    });
  };
  //notice you can just give onClick a function directly
  //I do this to reset count to 0 on the third button
  return (
    <>
      <div>{count}</div>
      <button onClick={incHandler}>Increase</button>
      <button onClick={decHandler}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

export default Counter;
