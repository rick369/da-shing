import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import app from './app';
import user from './user';
import info from './info';
import char from './char';

export default combineReducers({
  app,
  user,
  info,
  char,
  form: formReducer,
  routing: routerReducer,
});
