import Immutable from 'immutable';

import constants from '../constants';

const { USER } = constants;

let initObject = null;
if (localStorage.getItem('token')) {
  initObject = {
    token: localStorage.getItem('token'),
    isLoggedIn: true,
    ...JSON.parse(localStorage.getItem('user')),
  };
} else {
  initObject = {
    token: null,
    isLoggedIn: false,
    name: 'Guest',
  };
}

export const initialState = Immutable.fromJS(initObject);

export default function user(state = initialState, action) {
  // 若是來自 server side rendering 的 INITIAL_STATE 就轉換它，
  // 如果有需要轉換來自 INITIAL_STATE 的資料，就一定要寫這段
  if (typeof state.get === 'undefined') {
    // eslint-disable-next-line no-param-reassign
    state = initialState;
  }

  if (action.type === USER.LOGIN_SUCCESS) {
    localStorage.setItem('token', action.token);
    localStorage.setItem('user', JSON.stringify(action.user));
    return state.merge({
      token: action.token,
      isLoggedIn: true,
      ...action.user,
    });
  }

  if (action.type === USER.LOGOUT) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return state.merge({
      token: null,
      isLoggedIn: false,
      name: 'Guest',
    });
  }

  return state;
}
