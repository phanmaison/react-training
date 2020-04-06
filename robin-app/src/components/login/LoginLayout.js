import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

export default class LoginLayout extends React.Component{

    onLogin = () => {
        console.log("onLogin");
    }

    render() {
        return (
            <div>
                <div className="App">
                    Login page
                    
                <div style={{float: "right"}}>
                  <Link to="/">Main Page</Link>
                  </div>
                </div>
                <div className="container">
                    <input type="text" /> <button onClick={this.onLogin}>Login</button>
                </div>
            </div>
        );
      }
}