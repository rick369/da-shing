import constants from '../constants';

const { INFO } = constants;

const initialState = {
  data: [],
  isFetching: false,
};

export default function info(state = initialState, action) {
  if (action.type === INFO.FETCH_INFO_REQUEST) {
    return Object.assign({}, state, {
      isFetching: true,
    });
  }
  if (action.type === INFO.FETCH_INFO_SUCCESS) {
    return Object.assign({}, state, {
      data: action.response.data,
      isFetching: false,
    });
  }
  if (action.type === INFO.FETCH_INFO_FAIL) {
    return Object.assign({}, state, {
      isFetching: false,
    });
  }
  return state;
}
