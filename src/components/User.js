import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { connect } from 'react-redux';

import Menu from './Menu';
import {USER_LIST} from '../constants';

class User extends React.Component {
  componentDidMount() {
    Axios.get(USER_LIST, {crossdomain: true})
      .then(response => {
        const users = response.data;
        console.log(users);
      })
      .catch(error => console.log(error));
  }
  render() {
    const users = this.props.users.map(user => (
        <tr key={user.id}>
          <td><Link to="/">{user.email}</Link></td>
          <td>{user.total}</td>
        </tr>
    ));

    return (
      <div>
        <Menu />
        <h3>List user</h3>
        <table>
          <thead>
          <tr><th>User</th><th>Total Tasks</th></tr>
          </thead>
          <tbody>
            {users}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    users: state.users
  };
};

export default connect(mapState)(User);