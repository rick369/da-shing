import Immutable from 'immutable';

import constants from '../constants';

const { APP } = constants;

const initialState = Immutable.fromJS({
  i18n: {
    lang: '',
  },
  modal: {
    isOpen: false,
    isNotHasHeader: false,
    isNotHasFooter: false,
    title: '',
    body: '',
  },
});

export default function app(state = initialState, action) {
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

  if (action.type === APP.OPEN_MODAL) {
    // 為 body 加上 modal-open class
    document.body.classList.toggle('modal-open');
    return state.mergeDeep({
      modal: {
        isOpen: true,
        title: action.title,
        body: action.body,
        isNotHasHeader: action.isNotHasHeader,
        isNotHasFooter: action.isNotHasFooter,
      },
    });
  }

  if (action.type === APP.CLOSE_MODAL) {
    // 為 body 移除 modal-open class
    document.body.classList.toggle('modal-open');
    return state.mergeDeep({
      modal: initialState.toJS().modal,
    });
  }

  return state;
}
