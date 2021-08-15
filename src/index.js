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

import NavBar from './components/navbar';
import UseState from './features/use-state';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <h4>useSWR Demo</h4>
      <NavBar />
      <Switch>
        <Route path="/usestate" exact>
          <UseState><h2>Hello useState!</h2></UseState>
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
