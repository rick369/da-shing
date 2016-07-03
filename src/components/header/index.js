import React from 'react';
import { IndexLink, Link } from 'react-router';

import { auth } from '../../utils';

import styles from './styles';

function Header({ name }) {
  return (
    <div className="header">
      <h1><IndexLink to="/">App</IndexLink></h1>
      <ul>
        <li><IndexLink to="/" activeStyle={styles.linkActive}>Home</IndexLink></li>
        {
          auth.loggedIn() && (
            <li>
              <Link to="/dashboard" activeStyle={styles.linkActive}>
                Dashboard
              </Link>
            </li>
          )
        }
        <li><Link to="/about" activeStyle={styles.linkActive}>About</Link></li>
        {
          !auth.loggedIn() && (
            <li><Link to="/login" activeStyle={styles.linkActive}>Login</Link></li>
          )
        }
        {
          auth.loggedIn() && (
            <li><Link to="/logout" activeStyle={styles.linkActive}>Logout</Link></li>
          )
        }
      </ul>
      <p>
        Hello,
        <span className="name">{name}</span>
      </p>
    </div>
  );
}

Header.propTypes = {
  name: React.PropTypes.string.isRequired,
};

export default Header;
