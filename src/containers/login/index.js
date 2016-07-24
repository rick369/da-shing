import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import LoginForm from './components/login-form';

import { auth, validation } from '../../utils';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(values) {
    const { email, password } = values;
    const { location } = this.props;

    const promise = new Promise((resolve, reject) => {
      const emailErrorMessage =
        validation.required(email) || validation.email(email);
      if (emailErrorMessage) {
        reject({
          email: emailErrorMessage,
          _error: 'Login failed!',
        });
        return;
      }

      const passwordErrorMessage =
        validation.required(password) ||
        validation.minLength(4)(password) ||
        validation.maxLength(8)(password);
      if (passwordErrorMessage) {
        reject({
          password: passwordErrorMessage,
          _error: 'Login failed!',
        });
        return;
      }

      auth.login(email, password, (error, loggedIn) => {
        if (!loggedIn) {
          reject(error);
          return;
        }

        if (location.state && location.state.nextPathname) {
          this.context.router.replace(location.state.nextPathname);
        } else {
          this.context.router.replace('/');
        }

        resolve();
        return;
      });
    });

    return promise;
  }
  render() {
    return (
      <div>
        <Helmet title="Login" />
        <h2>Login</h2>
        <LoginForm submit={this.submit} />
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

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
