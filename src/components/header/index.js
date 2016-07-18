import React from 'react';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux';

import style from './style';

const Header = (props) => {
  const { t, isLoggedIn, user } = props;
  return (
    <div className="header">
      <h1><IndexLink to="/">{t('appName')}</IndexLink></h1>
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
      </ul>
      <p>
        {'Hello, '}
        <span className="name">{user.name}</span>
      </p>
    </div>
  );
};

Header.propTypes = {
  t: React.PropTypes.func,
  isLoggedIn: React.PropTypes.bool.isRequired,
  user: React.PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    t: state.i18n.t,
  };
}

function mapDispatchToProps() {
  return {};
}

export {
  Header,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
