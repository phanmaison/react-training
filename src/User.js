import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

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
    Axios.get(`http://www.todoapp.somee.com/api/user`)
      .then(res => {
        const users = res.data;
        this.setState({
          users: users
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    const users = this.state.users.map(user => (
        <tr>
          <td><Link to="/">{user.email}</Link></td>
          <td>{user.total}</td>
        </tr>
    ));

    return (
      <div>
        <ul>
          <li><Link to="/">Main</Link></li>
        </ul>
        <h3>List user</h3>
        <table>
          <tr><td>User</td><td>Tasks</td></tr>
          <tbody>
            {users}
          </tbody>
        </table>
      </div>
    );
  }
}

export default User;