import React from 'react';
import { IndexLink } from 'react-router';

import { translate } from 'react-i18next';

import Nav from '../nav';
import Language from '../language';

const Header = (props) => {
  const { t, isLoggedIn, user } = props;
  return (
    <div>
      <h1><IndexLink to="/">{t('appName')}</IndexLink></h1>
      <Nav isLoggedIn={isLoggedIn} />
      <p>
        {`${t('hello')}, `}
        <span className="name">{user.name}</span>
      </p>
      <Language />
    </div>
  );
};

Header.propTypes = {
  t: React.PropTypes.func,
  isLoggedIn: React.PropTypes.bool.isRequired,
  user: React.PropTypes.object.isRequired,
};

export default translate('common', { wait: true })(Header);
