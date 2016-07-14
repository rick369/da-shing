import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './user';
import info from './info';

export default combineReducers({
  user,
  info,
  routing: routerReducer,
});
