import React from 'react';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux';

import { auth } from '../../utils';

class Header extends React.Component {
  componentDidMount() {}
  render() {
    const { user } = this.props;
    return (
      <div className="header">
        <h1><IndexLink to="/">App</IndexLink></h1>
        <ul>
          <li><IndexLink to="/">Home</IndexLink></li>
          {
            auth.loggedIn() && (
              <li>
                <Link to="/dashboard">
                  Dashboard
                </Link>
              </li>
            )
          }
          <li><Link to="/about">About</Link></li>
          {
            !auth.loggedIn() && (
              <li><Link to="/login">Login</Link></li>
            )
          }
          {
            auth.loggedIn() && (
              <li><Link to="/logout">Logout</Link></li>
            )
          }
        </ul>
        <p>
          {'Hello, '}
          <span className="name">{user.name}</span>
        </p>
      </div>
    );
  }
}

Header.propTypes = {
  user: React.PropTypes.object,
};

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export {
  Header,
};

export default connect(
  mapStateToProps
)(Header);
