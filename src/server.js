require('babel-polyfill');
require('babel-register');

/* eslint-disable global-require */
if (process.env.NODE_ENV === 'development') {
  require('./server.dev.js');
}

if (process.env.NODE_ENV === 'production') {
  require('./server.prod.js');
}
/* eslint-enable global-require */
