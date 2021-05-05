import React, { useState } from 'react';
import { useEffect, usePlease } from "../customReact";

export const Counter = () => {
  const [test, setTest] = useState(0);
  const [count, setCount] = useState(0);

  /**/
  useEffect(() => {
    console.log('render', count);
    return () => console.log('unmount');
  }, [count]);
  usePlease(() => {
    console.log('render', count);
    return () => console.log('unmount');
  }, [count]);
  /**/

  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };

  return(
    <div>
      <h1>counter: {count}</h1>

      <div>
        <button onClick={minus}>-</button>
        <button onClick={plus}>+</button>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div>
        <button onClick={() => {console.log('test1')}}>test1</button>
        <button onClick={() => {setTest(test + 1)}}>test2: {test}</button>
      </div>
    </div>
  )
};
