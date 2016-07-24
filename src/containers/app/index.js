import React from 'react';
import Helmet from 'react-helmet';
import { translate } from 'react-i18next';

import Header from '../header';
import DevTools from '../DevTools';

import { auth } from '../../utils';

class App extends React.Component {
  componentDidMount() {}
  render() {
    const { t } = this.props;
    const isLoggedIn = auth.loggedIn();
    const user = auth.getUser();
    return (
      <div className="container">
        <Helmet
          titleTemplate={`${t('title')} - %s`}
          meta={[
            { charset: 'utf-8' },
            { name: 'description', content: t('meta.description') },
            { property: 'og:title', content: t('meta.og.title') },
            { property: 'og:url', content: t('meta.og.url') },
            { property: 'og:image', content: t('meta.og.image') },
            { property: 'og:description', content: t('meta.og.description') },
          ]}
        />
        <div>
          <Header isLoggedIn={isLoggedIn} user={user} />
          {this.props.children}
        </div>
        {/* eslint-disable no-undef */}
        {process.env.NODE_ENV === 'development' && __DEVTOOLS__ && <DevTools />}
        {/* eslint-enable no-undef */}
      </div>
    );
  }
}

App.propTypes = {
  t: React.PropTypes.func.isRequired,
  children: React.PropTypes.element.isRequired,
};

export default translate()(App);
