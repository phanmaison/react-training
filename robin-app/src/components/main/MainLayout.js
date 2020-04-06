import React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import { Link } from "react-router-dom";

export default class MainLayout extends React.Component {
  constructor() {
    super();
    document.title = "My Todo List";
  }

  render() {
    return (
      <div className="App">
        <header>
          TODO APP
        </header>
        <div>
          TODO APP Content
        </div>
      </div>
    );
  }
}
