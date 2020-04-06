import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Login from './Component/Login';
import ListTodo from './Component/ListTodo';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/listtodo" component={ListTodo} />
      </Switch>
    </Router>

  );
}

export default App;
