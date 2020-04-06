import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginLayout from './components/login/LoginLayout'
import MainLayout from './components/main/MainLayout'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <LoginLayout />
        </Route>
        <Route path="/">
          <MainLayout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
