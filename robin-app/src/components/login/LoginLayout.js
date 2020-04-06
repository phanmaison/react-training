import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import "./LoginLayout.css";
import 'bootstrap/dist/css/bootstrap.css';

export default class LoginLayout extends React.Component {
  onLogin = () => {
    console.log("onLogin");
  };

  render() {
    return (
      <div className="login-container">
        <div style={{ float: "right" }}>
          <Link to="/">Main Page</Link>
        </div>
        <div className="login-block">
          <h3 className="center">Login</h3>
          <hr />
          <div className="form-inline">
            <input type="text" className="form-control mr-2" placeholder="Enter username" /> <button className="btn btn-primary" onClick={this.onLogin}>Login</button>
          </div>
        </div>
      </div>
    );
  }
}
