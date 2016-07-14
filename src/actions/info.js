import {
  FETCH_INFO_DATA,
} from '../constants';

import 'whatwg-fetch';

export function fetchInfoData() {
  return dispatch => {
    fetch('/api/infos', {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((json) => {
      if (json.status < 200 || json.status >= 300) {
        // console.log(json.errorMessage);
        return;
      }
      dispatch({
        type: FETCH_INFO_DATA,
        data: json.data,
      });
    });
  };
}
