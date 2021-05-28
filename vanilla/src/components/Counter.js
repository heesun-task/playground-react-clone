import CustomReact  from '../customReact';

let idx = 0;
export const Counter = () => {
  const [count, setCount] = CustomReact.useState(0);
  const [text, setText] = CustomReact.useState('');

  // CustomReact.useEffect(() => {
  //   console.log('useEffect count1', count);
  //   return () => {console.log('count1 unmount')}
  // }, [count]);


  const rootElement = document.getElementById("content");
  /* 과제 2 */
  CustomReact.useEffect(() => {
    setTimeout(() => {
      console.log('timeout')
      setCount(10);
      CustomReact.render(Counter)
    }, 1000);
  }, []);
  console.log('@@',count)

  const addButton = () => {
    const button = document.createElement('button');
    button.innerHTML = count + ", " + text;
    button.setAttribute("onclick", () => {
      console.log('click')
      setCount(count + 1);
      removeButton();
      CustomReact.render(Counter);
    });

    rootElement.append(button);
  }

  const removeButton = (button) => {
    rootElement.removeChild(button.parentNode);
  }

  return {
    // click: () => {
    //   setCount(count + 1)
    // },
    // changeText: (v) => {
    //   setText(v)
    // },
    render: () => {
      addButton()
    },
  }
};
