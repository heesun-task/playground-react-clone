import React, { useState } from 'react';
import { CustomReactHooks } from "../customReact/src/CustomReactHooks";
// import {
//   useEffect,
//   useMemo,
// } from "../customReact";

export const Counter = () => {
  const CustomHook = CustomReactHooks();
  const { useEffect, useMemo } = CustomHook;

  const [test, setTest] = useState(0);
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log('mount')
    return () => { console.log('unmount'); } // 구현 전
  }, []);

  useEffect(() => {
    console.log('count1', count);
  }, [count]);

  useEffect(() => {
    console.log('count2', count2);
  }, [count2]);

  useEffect(() => {
    console.log('count all', count, count2);
  }, [count, count2]);

  const memorizedValue = useMemo(() => {
    if(count === 0 )
      return '@';
    if(count < 0 )
      return '-';
    return '+';
  }, [count]);


  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  const plus2 = () => {
    setCount2(count2 + 1);
  };
  const minus2 = () => {
    setCount2(count2 - 1);
  };

  return(
    <div>
      <section>
        <h1>counter: {count}</h1>

        <div>
          <button onClick={minus}>-</button>
          <button onClick={plus}>+</button>
        </div>
      </section>

      <section>
        <h1>counter2: {count2}</h1>
        <div>
          <button onClick={minus2}>-</button>
          <button onClick={plus2}>+</button>
        </div>
      </section>

      <section>
        <h2>memorizedValue : {`${memorizedValue}`}</h2>
      </section>

      <section>
        <button onClick={() => {console.log('test1')}}>test1</button>
        <button onClick={() => {setTest(test + 1)}}>test2: {test}</button>
      </section>
    </div>
  )
};
