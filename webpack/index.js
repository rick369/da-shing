let config;

/* eslint-disable global-require */
if (process.env.NODE_ENV === 'production') {
  config = require('./prod.config.js');
}

if (process.env.NODE_ENV === 'development') {
  config = require('./dev.config.js');
}
/* eslint-enable global-require */

module.exports = config;
