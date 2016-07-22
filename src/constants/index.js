import keymirrorNested from 'keymirror-nested';

const constants = {
  INFO: {
    FETCH_INFO_REQUEST: null,
    FETCH_INFO_SUCCESS: null,
    FETCH_INFO_FAIL: null,
  },
};

export default keymirrorNested(constants);
