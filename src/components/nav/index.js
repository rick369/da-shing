import React from 'react';
import { IndexLink, Link } from 'react-router';

import { translate } from 'react-i18next';

import style from './style';

class Nav extends React.Component {
  componentDidMount() {}
  render() {
    const { t, isLoggedIn } = this.props;
    return (
      <nav>
        <ul>
          <li><IndexLink to="/" activeStyle={style.linkActive}>{t('home')}</IndexLink></li>
          {
            isLoggedIn && (
              <li>
                <Link to="/dashboard" activeStyle={style.linkActive}>
                  {t('dashboard')}
                </Link>
              </li>
            )
          }
          <li><Link to="/about" activeStyle={style.linkActive}>{t('about')}</Link></li>
          {
            !isLoggedIn && (
              <li><Link to="/login" activeStyle={style.linkActive}>{t('login')}</Link></li>
            )
          }
          {
            isLoggedIn && (
              <li><Link to="/logout" activeStyle={style.linkActive}>{t('logout')}</Link></li>
            )
          }
        </ul>
      </nav>
    );
  }
}

Nav.propTypes = {
  t: React.PropTypes.func,
  isLoggedIn: React.PropTypes.bool.isRequired,
};

export default translate('nav', { wait: true })(Nav);
