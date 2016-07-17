import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import LoginForm from './components/login-form';

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
    const { t } = this.props;
    return (
      <div className="login">
        <h2>{t('login')}</h2>

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
  t: React.PropTypes.func,
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
)(
  translate('nav', { wait: true })(Login)
);
