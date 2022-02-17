import React from 'react';
import { Navigate } from 'react-router-dom';


class Login extends React.Component {

  constructor() {

    super();

    this.state = {
      redirectToReferrer: false
    }
    this.login = this.login.bind(this);
  }

  login() {

    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render() {
    const { from } = { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer) {
      return (
        <Navigate to={from} />
      )
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }


}

/* A fake authentication function */

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  }
};


export default Login