// import React  from 'react';
import CustomReact from '../customReact';

let idx = 0;
export const Counter = () => {
  const [count, setCount] = CustomReact.useState(0);

  CustomReact.useEffect(() => {
    console.log('useEffect count1', count);
    return () => {console.log('count1 unmount')}
  }, [count]);


  /* 과제 2 */
  // const [a, setA] = CustomReact.useState(1);
  //
  // CustomReact.useEffect(() => {
  //   setTimeout(() => {
  //     setA(10);
  //   }, 1000);
  // }, []);
  // console.log('@@',a())

  return {
    render: () => {
      console.log({count})
    },
    click: () => {
      setCount(count + 1)
    },
  }
};
