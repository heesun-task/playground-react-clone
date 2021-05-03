import React  from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';

import './App.css';
import { Counter } from './components/Counter';

const Components = [
  {path: '', component: <></>},
  {path: '/counter', component: <Counter />},
];

function App() {
  const history = useHistory();

  const handleShow = (path) => {
    history.push(path)
  }

  return (
    <div className="App">
      <Router>
        <header
          style={{display: 'flex'}}
        >
          {Components.map(x => (
            <NavButton key={x.path} path={x.path} />
          ))}
        </header>
        <Switch>
          <Route path="/counter">
            <Counter />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const NavButton = ({path}) => {
  return (
    <Link to={path}>
      <button>{path || 'none'}</button>
    </Link>
  )
}

export default App;
