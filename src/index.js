import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router, 
  Switch,
  Route,
  useParams
} from 'react-router-dom';

import NavBar from './components/navbar/index';
import UseState from './features/use-state';
import List from './features/list';
import ButtonEvent from './features/button-event';
import AsyncAction from './features/async-action';

const fetchTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const todos = await response.json();

  return todos;
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <h4>React Testing Recipes </h4>
      <NavBar />
      <Switch>
        <Route path="/usestate" exact>
          <UseState><h2>Hello useState!</h2></UseState>
        </Route>
        <Route path="/list" exact>
          <List />
        </Route>
        <Route path="/button-event" exact>
          <ButtonEvent onClick={() => {}} text = "Submit"/>
        </Route>
        <Route path="/async-action" exact>
          <AsyncAction listTodos={fetchTodos}  />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
