const path = require('path');

let config;

/* eslint-disable global-require */
if (process.env.NODE_ENV === 'production') {
  config = require(
    path.join(__dirname, 'prod.config.js')
  );
}

if (process.env.NODE_ENV === 'development') {
  config = require(
    path.join(__dirname, 'dev.config.js')
  );
}
/* eslint-enable global-require */

module.exports = config;
