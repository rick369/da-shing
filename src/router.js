import React from 'react';
import { render } from 'react-dom';
import {
  Router,
  browserHistory,
} from 'react-router';

import routes from './routes';
import { Provider } from 'react-redux';

import { syncHistoryWithStore } from 'react-router-redux';

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n-client';

const resources = window.INITIAL_I18N.resources;

resources.forEach((resource) => {
  const ns = resource.ns;
  const content = resource.content;
  i18n.addResourceBundle(window.INITIAL_I18N.locale, ns, content, true);
});

i18n.changeLanguage(window.INITIAL_I18N.locale);

import store from './store';

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render((
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <Router
        history={history}
        routes={routes}
      />
    </Provider>
  </I18nextProvider>
), document.getElementById('app'));
