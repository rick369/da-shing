import React from 'react';
import { connect } from 'react-redux';
import { IndexLink, Link } from 'react-router';
import { translate } from 'react-i18next';

import style from './style';

import ToggleLanguage from '../toggle-language';

function mapStateToProps(state) {
  return {
    user: state.user.toJS(),
  };
}

function mapDispatchToProps() {
  return {};
}

@connect(
  mapStateToProps,
  mapDispatchToProps
)
@translate()
export default class Header extends React.Component {
  static propTypes = {
    t: React.PropTypes.func.isRequired,
    user: React.PropTypes.object.isRequired,
  };
  componentDidMount() {}
  render() {
    const { t, user } = this.props;
    return (
      <div>
        <h1><IndexLink to="/">{t('appName')}</IndexLink></h1>
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
