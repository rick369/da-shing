import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import api from './middleware/api';

import { persistState } from 'redux-devtools';
import DevTools from './containers/DevTools';
let enhancer;
if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(api, thunk);
} else {
  enhancer = compose(
    applyMiddleware(api, thunk),
    DevTools.instrument(),
    persistState(
      (typeof window !== 'undefined') && window.location.href.match(
        /[?&]debug_session=([^&#]+)\b/
      )
    )
  );
}

const store = (typeof window !== 'undefined') ?
  createStore(reducers, window.INITIAL_STATE, enhancer) :
  createStore(reducers, enhancer);

export default store;
