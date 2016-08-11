import validation from './validation';

const getCDNUrl = (path) => process.env.CDN_URL + path;

export default {
  validation,
  getCDNUrl,
};
