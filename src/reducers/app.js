import Immutable from 'immutable';

import constants from '../constants';

const { APP } = constants;

const initialState = Immutable.fromJS({
  i18n: {
    lang: '',
  },
});

export default function App(state = initialState, action) {
  // 若是來自 server side rendering 的 INITIAL_STATE 就轉換它，
  // 如果有需要轉換來自 INITIAL_STATE 的資料，就一定要寫這段
  if (typeof state.get === 'undefined') {
    // eslint-disable-next-line no-param-reassign
    state = initialState;
  }

  // 改變語系
  if (action.type === APP.CHANGE_LANGUAGE) {
    return state.setIn(
      ['i18n', 'lang'],
      action.lang
    );
  }

  return state;
}
