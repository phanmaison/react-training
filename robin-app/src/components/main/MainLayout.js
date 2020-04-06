import React from 'react';
import logo from '../../logo.svg';
import '../../App.css';

export default class MainLayout extends React.Component{
    

    render(){
        return(
            <div className="App">
              <header>
                Sample App
                <div style={{float: "right"}}><a href="/login">Login</a></div>
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