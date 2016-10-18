import keymirrorNested from 'keymirror-nested';

const constants = {
  APP: {
    CHANGE_LANGUAGE: null,
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
};

export default keymirrorNested(constants);
