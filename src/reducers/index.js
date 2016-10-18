import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import app from './app';
import user from './user';
import info from './info';

export default combineReducers({
  app,
  user,
  info,
  form: formReducer,
  routing: routerReducer,
});
