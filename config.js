require('babel-polyfill');

module.exports = {
  appName: 'Init Project Web',
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
};
