import {
  FETCH_INFO_DATA,
} from '../constants';

import { CALL_API } from '../middleware/api';

import config from '../../config';

export function fetchInfoData() {
  return {
    [CALL_API]: {
      method: 'GET',
      url: `http://${config.apiHost}:${config.apiPort}/api/infos`,
      successType: FETCH_INFO_DATA,
    },
  };
}
