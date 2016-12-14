import validation from './validation';

import { CDN_URL } from '../../config';

const getCDNUrl = (path) => CDN_URL + path;

export default {
  validation,
  getCDNUrl,
};
