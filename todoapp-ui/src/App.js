import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/login';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
export class App extends Component {
  constructor(props) {
    super(props);

    //     const express = require("express");
    // var cors = require('cors')
    // const app = express();
    // app.use(cors());
    // const { createProxyMiddleware } = require('http-proxy-middleware');
    // app.use('/api', createProxyMiddleware({ 
    //     target: 'http://demo-todo-app.somee.com/', //original url
    //     changeOrigin: true, 
    //     //secure: false,
    //     onProxyRes: function (proxyRes, req, res) {
    //       proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    //     }
    // }));
    // app.listen(5000);
  }
  
render() {
  return (
    <Router>
      <Switch>
      <Route exact path="/login">
        <Login />
    </Route>
        
      </Switch>
    </Router>
  )
}
}
export default App;
