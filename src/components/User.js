import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import Menu from './Menu';
import {USER_LIST} from '../constants';

class User extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [
        {
          id: 1,
          email: 'asdf@gmail.com',
          total: 1
        }
      ]
    }
  }
  componentDidMount() {
    Axios.get(USER_LIST, {crossdomain: true})
      .then(response => {
        const users = response.data;
        this.setState({
          users
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    const users = this.state.users.map(user => (
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

export default User;