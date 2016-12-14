require('babel-polyfill');

module.exports = {
  APP_NAME: '',
  HOST: process.env.HOST || 'localhost',
  PORT: process.env.PORT || 3000,
  API_HOST: process.env.API_HOST || 'localhost',
  API_PORT: process.env.API_PORT || 4000,
  SOCKET_HOST: process.env.SOCKET_HOST || 'localhost',
  SOCKET_PORT: process.env.SOCKET_PORT || 4000,
  CDN_URL: process.env.CDN_URL,
};
