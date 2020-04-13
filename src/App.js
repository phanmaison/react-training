import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import { connect } from 'react-redux';

import Home from './components/Home';
import User from './components/User';
import Login from './components/Login';

import { updateUserId } from './redux/actions';

class App extends React.Component {
  componentWillMount() {
    const {cookies} = this.props;
    const userId = cookies.get('userId');

    if (!userId) {
      return;
    }

    this.props.updateUserId(userId);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" >
            { this.props.userId ? <Home /> : <Login /> }
          </Route>
          <Route path="/user" component={User} />
        </Switch>
      </Router>
    );
  }
}

const mapState = (state) => {
  return {
    userId: state.userId
  };
};

export default withCookies(connect(mapState, { updateUserId })(App));
