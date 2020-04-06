import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import { Link } from "react-router-dom";

export default class MainLayout extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          Sample App
          <div style={{ float: "right" }}>
            <Link to="/login">Login</Link>
          </div>
        </header>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Test React
          </a>
        </header>
      </div>
    );
  }
}
