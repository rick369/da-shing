import {
  INIT_I18N,
} from '../constants';

const initialState = {
  t() {},
};

export default function update(state = initialState, action) {
  if (action.type === INIT_I18N) {
    return Object.assign({}, {
      t: action.t,
    });
  }
  return state;
}
