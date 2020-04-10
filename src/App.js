import React from 'react';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import Home from './Home';
import User from './User';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/user" component={User} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
