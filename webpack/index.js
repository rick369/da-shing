var config;

if (process.env.NODE_ENV === 'production') {
  config = require('./prod.config.js');
}

if (process.env.NODE_ENV === 'development') {
  config = require('./dev.config.js');
}

module.exports = config;
