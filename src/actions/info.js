import constants from '../constants';

import { CALL_API } from '../middleware/api';

import { API_HOST, API_PORT } from '../../config';

const { INFO } = constants;

export function fetchInfoData() {
  return {
    [CALL_API]: {
      method: 'GET',
      url: `http://${API_HOST}:${API_PORT}/infos`,
      requestType: INFO.FETCH_INFO_REQUEST,
      successType: INFO.FETCH_INFO_SUCCESS,
      failType: INFO.FETCH_INFO_FAIL,
    },
  };
}
