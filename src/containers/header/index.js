import React from 'react';
import { connect } from 'react-redux';
import { IndexLink, Link } from 'react-router';
import { translate } from 'react-i18next';

import style from './style';

import ToggleLanguage from '../toggle-language';

class Header extends React.Component {
  componentDidMount() {}
  render() {
    const { t, isLoggedIn, user } = this.props;
    return (
      <div>
        <h1><IndexLink to="/">{t('appName')}</IndexLink></h1>
        <ul>
          <li><IndexLink to="/" activeStyle={style.linkActive}>{t('nav.home')}</IndexLink></li>
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
        <div>
          <ToggleLanguage />
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  t: React.PropTypes.func.isRequired,
  isLoggedIn: React.PropTypes.bool.isRequired,
  user: React.PropTypes.object.isRequired,
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default translate()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);
