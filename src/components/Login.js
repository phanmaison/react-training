import React from 'react';
import { connect } from 'react-redux';
import {loginAction} from '../redux/actions'

class Login extends React.Component {
  onSubmit(event) {
    event.preventDefault();

    const userId = document.getElementById('userId').value;
    this.props.loginAction(userId);
  }
  render() {
    return (
      <div>
        <h2>Login form</h2>
        <form>
          <input id="userId"/>
          <button type="submit" onClick={(e) => this.onSubmit(e)}>Login</button>
        </form>
      </div>
    );
  }
}

export default connect(null, {loginAction})(Login);