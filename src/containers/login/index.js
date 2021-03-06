import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { translate } from 'react-i18next';

import LoginForm from './components/login-form';

import { validation } from '../../utils';

import { formLogin, loginSuccess } from '../../actions/user';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onLoginSuccess({ user, token }) {
      dispatch(loginSuccess({ user, token }));
    },
  };
}

@connect(
  mapStateToProps,
  mapDispatchToProps
)
@translate(['common', 'login'])
export default class Login extends React.Component {
  static propTypes = {
    t: React.PropTypes.func.isRequired,
    location: React.PropTypes.any.isRequired,
    onLoginSuccess: React.PropTypes.func.isRequired,
  };
  static contextTypes = {
    router: React.PropTypes.any.isRequired,
  };
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(values) {
    const { email, password } = values;
    const { location, onLoginSuccess } = this.props;
    const { router } = this.context;

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

      formLogin({ email, password })
      .then((response) => {
        const { user, token } = response;

        onLoginSuccess({ user, token });

        if (location.state && location.state.nextPathname) {
          router.replace(location.state.nextPathname);
        } else {
          router.replace('/');
        }

        resolve();
        return;
      })
      .catch((error) => {
        reject(error);
      });
    });

    return promise;
  }
  render() {
    const { t } = this.props;
    return (
      <section>
        <Helmet
          title={t('nav.login')}
          meta={[
            { charset: 'utf-8' },
            { name: 'description', content: t('login:meta.description') },
            { property: 'og:title', content: t('login:meta.og.title') },
            { property: 'og:url', content: t('login:meta.og.url') },
            { property: 'og:image', content: t('login:meta.og.image') },
            { property: 'og:description', content: t('login:meta.og.description') },
          ]}
        />
        <h2>{t('nav.login')}</h2>
        <LoginForm submit={this.submit} />
      </section>
    );
  }
}
