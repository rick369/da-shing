import {
  FETCH_INFO_DATA,
} from '../constants';

import { CALL_API } from '../middleware/api';

export function fetchInfoData() {
  return {
    [CALL_API]: {
      method: 'GET',
      url: 'http://localhost:5000/api/infos',
      successType: FETCH_INFO_DATA,
    },
  };
}
