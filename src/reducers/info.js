import {
  FETCH_INFO_DATA,
} from '../constants';

const initialState = {
  data: [],
};

export default function update(state = initialState, action) {
  if (action.type === FETCH_INFO_DATA) {
    return {
      data: action.data,
    };
  }
  return state;
}
