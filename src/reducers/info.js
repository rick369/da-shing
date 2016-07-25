import Immutable from 'immutable';

import constants from '../constants';

const { INFO } = constants;

export const initialState = Immutable.fromJS({
  loaded: false,
  isFetching: false,
  data: [],
});

export default function info(state = initialState, action) {
  // 若是來自 server side rendering 的 INITIAL_STATE 就轉換它，
  // 如果有需要轉換來自 INITIAL_STATE 的資料，就一定要寫這段
  if (typeof state.get === 'undefined') {
    // eslint-disable-next-line no-param-reassign
    state = Immutable.fromJS(state);
  }

  if (action.type === INFO.FETCH_INFO_REQUEST) {
    return state.set('isFetching', true);
  }
  if (action.type === INFO.FETCH_INFO_SUCCESS) {
    return state.merge({
      loaded: true,
      isFetching: false,
      data: action.response.data,
    });
  }
  if (action.type === INFO.FETCH_INFO_FAIL) {
    return state.merge({
      loaded: false,
      isFetching: false,
    });
  }
  return state;
}
