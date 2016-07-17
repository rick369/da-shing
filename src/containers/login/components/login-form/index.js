import React from 'react';
import { translate } from 'react-i18next';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();

    const email = this.refs.email.value;
    const password = this.refs.password.value;

    this.props.handleSubmit(email, password);
  }
  render() {
    const { t } = this.props;
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <p>
          <label htmlFor="email">
            <span>{`${t('email')} : `}</span>
          </label>
          <input ref="email" id="email" />
        </p>
        <p>
          <label htmlFor="password">
            <span>{`${t('password')} : `}</span>
          </label>
          <input ref="password" id="password" type="password" />
        </p>
        <p>
          <button type="submit">{t('login')}</button>
        </p>
      </form>
    );
  }
}

LoginForm.propTypes = {
  t: React.PropTypes.func,
  handleSubmit: React.PropTypes.func,
};

export default translate('form', { wait: true })(LoginForm);
