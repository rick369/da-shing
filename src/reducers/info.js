import {
  FETCH_INFO_DATA,
} from '../constants';

const initialState = {
  data: [],
};

export default function info(state = initialState, action) {
  if (action.type === FETCH_INFO_DATA) {
    return {
      data: action.response.data,
    };
  }
  return state;
}
