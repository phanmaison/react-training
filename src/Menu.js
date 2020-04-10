import React from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
      <ul>
        <li><Link to="/user">User</Link></li>
      </ul>
    );
  }
}

export default Menu;