require("babel-polyfill");
require("babel-register");

if (process.env.NODE_ENV === 'production') {
  require('./index.prod.js');
}

if (process.env.NODE_ENV === 'development') {
  require('./index.dev.js');
}
