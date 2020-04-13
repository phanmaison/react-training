import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import Axios from 'axios';

import Home from './components/Home';
import User from './components/User';
import Login from './components/Login';
import {LOGIN_URL} from './constants';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null
    }

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  componentWillMount() {
    const {cookies} = this.props;
    const userId = cookies.get('userId');

    if (!userId) {
      return;
    }

    this.setState({
      userId: userId
    });
  }
  login(userId) {
    const data = {Email: userId};
    Axios.post(LOGIN_URL, data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });

    const {cookies} = this.props;
    cookies.set('userId', userId, { path: '/' });

    this.setState({
      userId
    });
  }
  logout() {
    const {cookies} = this.props;
    cookies.remove('userId');

    this.setState({userId: ''});
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" >
            { this.state.userId ? <Home userId={this.state.userId} logout={this.logout} /> : <Login login={this.login} /> }
          </Route>
          <Route path="/user" component={User} />
        </Switch>
      </Router>
    );
  }
}

export default withCookies(App);
