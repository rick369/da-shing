require('babel-polyfill');
require('babel-register');

const path = require('path');

/* eslint-disable global-require */
if (process.env.NODE_ENV === 'development') {
  require(
    path.join(__dirname, 'server.dev.js')
  );
}

if (process.env.NODE_ENV === 'production') {
  require(
    path.join(__dirname, 'server.prod.js')
  );
}
/* eslint-enable global-require */
