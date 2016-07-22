import Immutable from 'immutable';

import constants from '../constants';

const { INFO } = constants;

export const initialState = Immutable.fromJS({
  data: [],
  isFetching: false,
});

export default function info(state = initialState, action) {
  if (action.type === INFO.FETCH_INFO_REQUEST) {
    return state.set('isFetching', true);
  }
  if (action.type === INFO.FETCH_INFO_SUCCESS) {
    return state.merge({
      data: action.response.data,
      isFetching: false,
    });
  }
  if (action.type === INFO.FETCH_INFO_FAIL) {
    return state.set('isFetching', false);
  }
  return state;
}
