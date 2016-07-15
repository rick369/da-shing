import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import i18n from './i18n';
import info from './info';

export default combineReducers({
  i18n,
  info,
  routing: routerReducer,
});
