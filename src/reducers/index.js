import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';

import info from './info';

export default combineReducers({
  info,
  form: formReducer,
  routing: routerReducer,
  reduxAsyncConnect,
});
