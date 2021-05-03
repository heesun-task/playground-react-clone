import React, { useState, useMemo} from 'react';

import { useEffect } from '../utility';

export const Counter = () => {
  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   console.log(count)
  //   return () => {
  //     console.log('bye')
  //   }
  // }, [count]);
  // useEffect(() => {
  //   console.log('in')
  //   return () => {
  //     console.log('out')
  //   }
  // }, []);
  useEffect(() => {
    console.log('count',count)
  }, [count])

  const plus = () => {
    setCount(count + 1);
  }
  const minus = () => {
    setCount(count - 1);
  }

  return(
    <div>
      <h1>counter: {count}</h1>

      <div>
        <button onClick={minus}>-</button>
        <button onClick={plus}>+</button>
      </div>
    </div>
  )
}
