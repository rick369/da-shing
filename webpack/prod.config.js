var webpack = require('webpack');
var CleanPlugin = require('clean-webpack-plugin');
var path = require('path');

var rootDir = path.resolve(__dirname, '..');
var assetsPath = path.resolve(rootDir, './dist/build');

var config = {
  entry: [
    './src/router.js'
  ],
  output: {
    path: rootDir + '/dist/build',
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react'],
      }
    }]
  },
  plugins: [
    new CleanPlugin([assetsPath], { root: rootDir }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.HOST': JSON.stringify(process.env.HOST),
      'process.env.PORT': JSON.stringify(process.env.PORT),
      'process.env.APIHOST': JSON.stringify(process.env.APIHOST),
      'process.env.APIPORT': JSON.stringify(process.env.APIPORT)
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};

module.exports = config;
