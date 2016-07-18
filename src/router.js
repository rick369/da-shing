import React from 'react';
import { render } from 'react-dom';
import {
  Router,
  browserHistory,
} from 'react-router';

import routes from './routes';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { syncHistoryWithStore } from 'react-router-redux';

import { persistState } from 'redux-devtools';
import DevTools from './containers/DevTools';
let enhancer;
if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  enhancer = compose(
    applyMiddleware(thunk),
    DevTools.instrument(),
    persistState(
      window.location.href.match(
        /[?&]debug_session=([^&#]+)\b/
      )
    )
  );
}
const store = createStore(reducers, enhancer);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render((
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
), document.getElementById('app'));
