import React from 'react';
import { IndexLink, Link } from 'react-router';

import style from './style';

const Header = (props) => {
  const { isLoggedIn, user } = props;
  return (
    <div>
      <h1><IndexLink to="/">App</IndexLink></h1>
      <ul>
        <li><IndexLink to="/" activeStyle={style.linkActive}>Home</IndexLink></li>
        {
          isLoggedIn && (
            <li>
              <Link to="/dashboard" activeStyle={style.linkActive}>
                Dashboard
              </Link>
            </li>
          )
        }
        <li><Link to="/about" activeStyle={style.linkActive}>About</Link></li>
        {
          !isLoggedIn && (
            <li><Link to="/login" activeStyle={style.linkActive}>Login</Link></li>
          )
        }
        {
          isLoggedIn && (
            <li><Link to="/logout" activeStyle={style.linkActive}>Logout</Link></li>
          )
        }
        <li>
          <Link
            to="/font-awesome-icons"
            activeStyle={style.linkActive}
          >
            FontAwesomeIcons
          </Link>
        </li>
        <li><Link to="/card-columns" activeStyle={style.linkActive}>CardColumns</Link></li>
      </ul>
      <p>
        {'Hello, '}
        <span className="name">{user.name}</span>
      </p>
    </div>
  );
};

Header.propTypes = {
  isLoggedIn: React.PropTypes.bool.isRequired,
  user: React.PropTypes.object.isRequired,
};

export default Header;
