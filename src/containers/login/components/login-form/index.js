import React from 'react';

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
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label htmlFor="email">
            <span>email:</span>
          </label>
          <input ref="email" id="email" />
        </p>
        <p>
          <label htmlFor="password">
            <span>password:</span>
          </label>
          <input ref="password" id="password" type="password" />
        </p>
        <p>
          <button type="submit">login</button>
        </p>
      </form>
    );
  }
}

LoginForm.propTypes = {
  handleSubmit: React.PropTypes.func,
};

export default LoginForm;
