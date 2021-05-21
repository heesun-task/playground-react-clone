import CustomReact  from '../customReact';
import ReactDOM from 'react-dom';

let idx = 0;
export const Counter = () => {
  const [count, setCount] = CustomReact.useState(0);
  const [text, setText] = CustomReact.useState('');

  // CustomReact.useEffect(() => {
  //   console.log('useEffect count1', count);
  //   return () => {console.log('count1 unmount')}
  // }, [count]);


  /* 과제 2 */
  CustomReact.useEffect(() => {
    setTimeout(() => {
      console.log('timeout')
      setCount(10);
      CustomReact.render(Counter)
    }, 1000);
  }, []);
  console.log('@@',count)

  return {
    click: () => {
      setCount(count + 1)
    },
    changeText: (v) => {
      setText(v)
    },
    render: () => {
      const Btn = ()=> (
        <button onClick={()=>{
          setCount(count + 1)
          CustomReact.render(Counter)
        }}>{count} {text}</button>
      )

      const rootElement = document.getElementById("root");
      ReactDOM.render(<Btn />, rootElement);
    },
  }
};
