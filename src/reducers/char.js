import Immutable from 'immutable';

import constants from '../constants';

const { CHAR } = constants;

export const initialState = Immutable.fromJS({
  charMessages: [],
});

export default function char(state = initialState, action) {
  // 若是來自 server side rendering 的 INITIAL_STATE 就轉換它，
  // 如果有需要轉換來自 INITIAL_STATE 的資料，就一定要寫這段
  if (typeof state.get === 'undefined') {
    // eslint-disable-next-line no-param-reassign
    state = Immutable.fromJS(state);
  }

  if (action.type === CHAR.ADD_CHAR_MESSAGE_TEXT) {
    return state.set(
      'charMessages',
      state.get('charMessages').push({
        text: action.text,
      })
    );
  }
  return state;
}
