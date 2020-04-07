import React from "react";
import logo from "./logo.svg";
import LoginLayout from "./components/login/LoginLayout";
import MainLayout from "./components/main/MainLayout";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import {PrivateRoute} from "./components/common/PrivateRoute"

// import { ToastContainer } from "react-toastr";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

// Main App component
// Use a router to determine different layout here
// point to the layout component

function App() {
  let container;

  return (
    <Router>
      {/* Test navigator, to be removed */}
      <div>
        <h4 className="d-inline">Test navigator</h4>
        <Link to="/" className="btn">
          Home
        </Link>
        <Link to="/login" className="btn">
          Login
        </Link>
      </div>
      {/* Router switch, point to layout component, each component will handle its own business */}
      <Switch>
        <Route exact path="/login">
          <LoginLayout name="true" />
        </Route>
        <PrivateRoute path="/">
          <MainLayout />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
