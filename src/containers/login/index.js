import React from 'react';

import LoginForm from './components/LoginForm.js';

import { auth } from '../../utils';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(email, password) {
    auth.login(email, password, (loggedIn) => {
      if (!loggedIn) {
        return this.setState({ error: true });
      }

      const { location } = this.props;
      if (location.state && location.state.nextPathname) {
        this.context.router.replace(location.state.nextPathname);
      } else {
        this.context.router.replace('/');
      }

      return false;
    });
  }
  render() {
    return (
      <div className="login">
        <h2>Login</h2>

        <LoginForm handleSubmit={this.handleSubmit} />

        {
          this.state.error && (
            <p>Bad login information</p>
          )
        }
      </div>
    );
  }
}

Login.propTypes = {
  location: React.PropTypes.any,
  router: React.PropTypes.any,
};

Login.contextTypes = {
  router: React.PropTypes.any,
};

export default Login;
