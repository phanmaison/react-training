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
import userService from "../../services/userService"

export default class LoginLayout extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;

    console.log("LoginLayout.constructor", this.props);
    console.log("userService", userService, userService.getUsers);

    // var service = new userService();
    // console.log("service", service, service.getUsers);
    // console.log("service", service.getUsers);

    // this.users = service.getUsers();
    // console.log("users", this.users);

    // var service = new userService();

    // let isAuthen = service.isAuthenticate;

    // console.log("userService", service);

    // update document title
    document.title = "Login";

    this.state = { username: "" };
  }

  // handle button submit
  onLoginClick = () => {
    console.log("onLoginClick", this.state);

    if (!this.state.username){
        // ToastMessage("Please enter username");

        // TODO: display error message
        // ToastContainer.error("Please enter username");
        return;
    }

    console.log("login success");
  };

  // handle value change => setState
  onChange = (event) => {
    const target = event.target;
    const name = target.name;

    // console.log("onChange", event);
    // console.log(target);
    
    this.setState({ [name]: target.value });

    // // note: this.state is not yet updated here!!!
    // console.log(this.state);

  };

  render() {
    return (
      <div className="login-container">
        <div className="login-block">
          <h3 className="center">Login</h3>
          <hr />
          <div className="form-inline">
            <input
              type="text"
              className="form-control mr-2"
              placeholder="Enter username"
              name="username"
              onChange={this.onChange}
            />{" "}
            <button className="btn btn-primary" onClick={this.onLoginClick}>
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}
