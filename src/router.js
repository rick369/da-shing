import React from 'react';
import { render } from 'react-dom';
import {
  Router,
  browserHistory,
} from 'react-router';

// i18n 處理
import { I18nextProvider } from 'react-i18next';
import { i18n } from './utils';

import routes from './routes';

import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './store';

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render((
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <Router history={history} routes={routes} />
    </I18nextProvider>
  </Provider>
), document.getElementById('app'));
