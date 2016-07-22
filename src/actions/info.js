import constants from '../constants';

import { CALL_API } from '../middleware/api';

import config from '../../config';

const { INFO } = constants;

export function fetchInfoData() {
  return {
    [CALL_API]: {
      method: 'GET',
      url: `http://${config.apiHost}:${config.apiPort}/api/infos`,
      requestType: INFO.FETCH_INFO_REQUEST,
      successType: INFO.FETCH_INFO_SUCCESS,
      failType: INFO.FETCH_INFO_FAIL,
    },
  };
}
