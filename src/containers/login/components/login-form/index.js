import React from 'react';
import { reduxForm } from 'redux-form';

import Fetching from '../../../../components/fetching';

export const fields = ['email', 'password'];

function LoginForm(props) {
  const { submit, fields: { email, password }, error, handleSubmit, submitting } = props;

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor="email">
          <span>email:</span>
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
          <span>password:</span>
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
              <span>Log In</span>
          }
        </button>
      </div>
    </form>
  );
}

LoginForm.propTypes = {
  submit: React.PropTypes.func.isRequired,
  fields: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  error: React.PropTypes.string,
  submitting: React.PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'submitValidation',
  fields,
})(LoginForm);
