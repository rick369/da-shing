var webpack = require('webpack');

var config = {
  entry: [
    './src/router.js'
  ],
  output: {
    path: __dirname + '/dist/build',
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  plugins: []
};

/*
if (!__DEVELOPMENT__) {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  );
}
*/

if (__DEVELOPMENT__) {
  config.entry.unshift('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true');
  config.plugins.push(
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  );
  config.devtool = 'source-map';
}

module.exports = config;
