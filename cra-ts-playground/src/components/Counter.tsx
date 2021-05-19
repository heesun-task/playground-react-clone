import React, { useState } from 'react';
// import { useEffect, useMemo } from "../customReact";
// import { useEffect, useMemo } from "../customReact/CustomReactHooks";
// import { CustomReactHooks } from "../customReact/CustomReactHooks";
import CustomHooks from "../customReact";

export const Counter = () => {
  const { useEffect, useMemo } = CustomHooks();

  const [test, setTest] = useState(0);
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log('count1', count);
    return () => {console.log('count1 unmount')}
  }, [count]);

  useEffect(() => {
    console.log('count2', count2);
    return () => {console.log('count2 unmount')}
  }, [count2]);

  useEffect(() => {
    console.log('count all', count, count2);
  }, [count, count2]);

  const memorizedValue = useMemo(() => {
    if(count === 0 )
      return 'zero';
    if(count < 0 )
      return 'minus';
    return 'plus';
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
        <h2>memorizedValue</h2>
        <h3>{`counter: ${memorizedValue}`}</h3>
      </section>

      <section>
        <h1>counter2: {count2}</h1>
        <div>
          <button onClick={minus2}>-</button>
          <button onClick={plus2}>+</button>
        </div>
      </section>

      <section>
        <button onClick={() => {
          setTest(test + 1);
          console.log('rerenderDom');
        }}>rerender test</button>
      </section>
    </div>
  )
};
