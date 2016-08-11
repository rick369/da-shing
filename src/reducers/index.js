import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import user from './user';
import info from './info';

export default combineReducers({
  user,
  info,
  form: formReducer,
  routing: routerReducer,
});
