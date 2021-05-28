import React from 'react';
import CustomReact from "./customReact";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';
import { Counter } from './components/Counter.js';

/* render 구현 전 까지 주석 */
// const Components = [
//   {path: '', component: <></>},
//   {path: '/counter', component: <Counter />},
// ];

function App() {

  /* state 업데이트 테스트 */
  let Component;
  Component = CustomReact.render(Counter)
  // Component.changeText('hi');



  return (
    <div className="App">`
      {/*<Router>*/}
      {/*  <header*/}
      {/*    style={{display: 'flex'}}*/}
      {/*  >*/}
      {/*    {Components.map(x => (*/}
      {/*      <NavButton key={x.path} path={x.path} />*/}
      {/*    ))}*/}
      {/*  </header>*/}
      {/*  <Switch>*/}
      {/*    <Route path="/counter">*/}
      {/*      <Counter />*/}
      {/*    </Route>*/}
      {/*  </Switch>*/}
      {/*</Router>*/}
    </div>
  );
};

// const NavButton = ({path}) => {
//   return (
//     <Link to={path}>
//       <button>{path || 'none'}</button>
//     </Link>
//   )
// };

export default App;
