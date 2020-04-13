import React from 'react';

class Login extends React.Component {
  onSubmit(event) {
    event.preventDefault();

    const userId = document.getElementById('userId').value;
    this.props.login(userId);
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

export default Login;