import {
  UPDATE_USER,
  INIT_USER,
} from '../constants';

const initialState = {
  name: 'Guest',
};

export default function update(state = initialState, action) {
  if (action.type === UPDATE_USER) {
    return Object.assign({}, {
      name: action.name,
    });
  } else if (action.type === INIT_USER) {
    return Object.assign({}, initialState);
  }
  return state;
}
