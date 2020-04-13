import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Login from './components/Login';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      userId: null
    }

    this.login = this.login.bind(this);
  }
  login(userId) {
    this.setState({
      isLogin: true,
      userId
    });
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" >
            { this.state.isLogin ? <Home userId={this.state.userId} /> : <Login login={this.login} /> }
          </Route>
          <Route path="/user" component={User} />
        </Switch>
      </Router>
    );
  }
}

export default App;
