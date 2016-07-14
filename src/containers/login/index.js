import React from 'react';
import { connect } from 'react-redux';

import LoginForm from './components/LoginForm.js';

import { auth } from '../../utils';

import { updateUser } from '../../actions/user';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(email, password) {
    const { onUpdateUser } = this.props;
    auth.login(email, password, (loggedIn, user) => {
      if (!loggedIn) {
        return this.setState({ error: true });
      }

      onUpdateUser(user);

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
  onUpdateUser: React.PropTypes.func,
};

Login.contextTypes = {
  router: React.PropTypes.any,
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onUpdateUser: (user) => {
      dispatch(updateUser(user));
    },
  };
}

export {
  Login,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
