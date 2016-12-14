import React from 'react';
import { IndexLink, Link } from 'react-router';
import { translate } from 'react-i18next';

import style from './style';

@translate()
export default class Nav extends React.Component {
  static propTypes = {
    t: React.PropTypes.func.isRequired,
    user: React.PropTypes.object.isRequired,
  };
  componentDidMount() {}
  render() {
    const { t, user } = this.props;
    return (
      <nav>
        <ul>
          <li><IndexLink to="/" activeStyle={style.linkActive}>{t('nav.home')}</IndexLink></li>
          {
            user.isLoggedIn && (
              <li>
                <Link to="/dashboard" activeStyle={style.linkActive}>
                  Dashboard
                </Link>
              </li>
            )
          }
          <li><Link to="/about" activeStyle={style.linkActive}>About</Link></li>
          <li><Link to="/char" activeStyle={style.linkActive}>Char</Link></li>
          {
            !user.isLoggedIn && (
              <li><Link to="/login" activeStyle={style.linkActive}>Login</Link></li>
            )
          }
          {
            user.isLoggedIn && (
              <li><Link to="/logout" activeStyle={style.linkActive}>Logout</Link></li>
            )
          }
        </ul>
      </nav>
    );
  }
}
