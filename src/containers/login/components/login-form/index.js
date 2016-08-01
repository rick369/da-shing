import React from 'react';
import { reduxForm } from 'redux-form';
import { translate } from 'react-i18next';

import Fetching from '../../../../components/fetching';

export const fields = ['email', 'password'];

@reduxForm({
  form: 'submitValidation',
  fields,
})
@translate()
export default class LoginForm extends React.Component {
  static propTypes = {
    t: React.PropTypes.func.isRequired,
    submit: React.PropTypes.func.isRequired,
    fields: React.PropTypes.object.isRequired,
    handleSubmit: React.PropTypes.func.isRequired,
    error: React.PropTypes.string,
    submitting: React.PropTypes.bool.isRequired,
  };
  componentDidMount() {}
  render() {
    const { t, submit, fields: { email, password }, error, handleSubmit, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="email">
            <span>{t('email')}:</span>
          </label>
          <input
            id="email"
            placeholder="Email"
            value={email.value}
            onChange={email.onChange}
          />
          {email.touched && email.error && <span>{email.error}</span>}
        </div>
        <div>
          <label htmlFor="password">
            <span>{t('password')}:</span>
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password.value}
            onChange={password.onChange}
          />
          {password.touched && password.error && <span>{password.error}</span>}
        </div>
        {error && <div>{error}</div>}
        <div>
          <button type="submit" disabled={submitting}>
            {
              submitting ?
                <Fetching /> :
                <span>{t('btn.login')}</span>
            }
          </button>
        </div>
      </form>
    );
  }
}
