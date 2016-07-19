require("babel-polyfill");
require("babel-register");

if (process.env.NODE_ENV === 'production') {
  require('./server.prod.js');
}

if (process.env.NODE_ENV === 'development') {
  require('./server.dev.js');
}
