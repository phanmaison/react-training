import React from 'react';
import { connect } from 'react-redux';

import Form from './Form';
import List from './List';
import Menu from './Menu';
import { logoutAction } from '../redux/actions';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <h3>Hello {this.props.userId}, <a href="#logout" onClick={() => this.props.logoutAction()}>logout</a></h3>
        <Form />
        <List />
      </div>
    );
  }
}

const mapState = state => ({
  userId: state.userId
});

export default connect(mapState, { logoutAction })(Home);
