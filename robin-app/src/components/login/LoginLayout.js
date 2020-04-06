import React from 'react';

export default class LoginLayout extends React.Component{

    onLogin = () => {
        console.log("onLogin");
    }

    render() {
        return (
            <div>
                <div className="App">
                    Login page
                    <a style={{float:"right" }} href="/" > Main Page </a>
                </div>
                <div className="container">
                    <input type="text" /> <button onClick={this.onLogin}>Login</button>
                </div>
            </div>
        );
      }
}