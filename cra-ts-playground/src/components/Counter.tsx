import React  from 'react';
import CustomReact from '../customReact';

export const Counter = () => {
  const [count, setCount] = CustomReact.useState(0);
  const [count2, setCount2] = CustomReact.useState(0);

  CustomReact.useEffect(() => {
    console.log('count1', count());
    return () => {console.log('count1 unmount')}
  }, [count()]);


  const memorizedValue = CustomReact.useMemo(() => {
    // @ts-ignore
    if(count() === 0 )
      return 'zero';
    // @ts-ignore
    if(count() < 0 )
      return 'minus';
    return 'plus';
  }, [count()]);

  const plus = () => {
    // @ts-ignore
    console.log('plus', count() + 1)
    // @ts-ignore
    setCount(count()+1)
  };

  const minus = () => {
    // @ts-ignore
    console.log('minus', count() - 1)
    // @ts-ignore
    setCount(count() - 1);
  };
  const plus2 = () => {
    // @ts-ignore
    setCount2(count2() + 1);
  };
  const minus2 = () => {
    // @ts-ignore
    setCount2(count2() - 1);
  };

  return(
    <div>
      <section>
        <h1>counter: {CustomReact.render(count)}</h1>

        <div>
          <button onClick={minus}>-</button>
          {/*<button onClick={plus}>+</button>*/}
          <button onClick={()=> {
            CustomReact.render(plus)
          }}>+</button>
        </div>
      </section>

      <section>
        <h2>memorizedValue</h2>
        <h3>{`counter: ${memorizedValue}`}</h3>
      </section>

      <section>
        <h1>counter2: {count2()}</h1>
        <div>
          <button onClick={minus2}>-</button>
          <button onClick={plus2}>+</button>
        </div>
      </section>

      <section>
        <button onClick={() => {
          console.log('rerenderDom');
        }}>rerender test</button>
      </section>
    </div>
  )
};
