import keymirrorNested from 'keymirror-nested';

const constants = {
  APP: {
    CHANGE_LANGUAGE: null,
    OPEN_MODAL: null,
    CLOSE_MODAL: null,
  },
  USER: {
    LOGIN_SUCCESS: null,
    LOGOUT: null,
  },
  INFO: {
    FETCH_INFO_REQUEST: null,
    FETCH_INFO_SUCCESS: null,
    FETCH_INFO_FAIL: null,
  },
  CHAR: {
    ADD_CHAR_MESSAGE_TEXT: null,
  },
};

export default keymirrorNested(constants);
