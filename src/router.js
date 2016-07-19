import React from 'react';
import { render } from 'react-dom';
import {
  Router,
  browserHistory,
} from 'react-router';

import routes from './routes';
import { Provider } from 'react-redux';

import { syncHistoryWithStore } from 'react-router-redux';

import store from './store';

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render((
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
), document.getElementById('app'));
