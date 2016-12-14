const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const path = require('path');

const HOST = require('../config').HOST;
const PORT = require('../config').PORT;
const API_HOST = require('../config').API_HOST;
const API_PORT = require('../config').API_PORT;
const SOCKET_HOST = require('../config').SOCKET_HOST;
const SOCKET_PORT = require('../config').SOCKET_PORT;
const CDN_URL = require('../config').CDN_URL;

const rootDir = path.resolve(__dirname, '..');

// https://github.com/halt-hammerzeit/webpack-isomorphic-tools
const WebpackIsomorphicToolsPlugin = require(
  path.join('webpack-isomorphic-tools', 'plugin')
);

/* eslint-disable global-require */
const webpackIsomorphicToolsPlugin =
  new WebpackIsomorphicToolsPlugin(require(
    path.join(__dirname, 'webpack-isomorphic-tools-configuration')
  ))
  .development();
/* eslint-enable global-require */

const config = {
  devtool: 'source-map',
  entry: [
    path.join('webpack-hot-middleware', 'client?path=/__webpack_hmr&timeout=20000&reload=true'),
    'tether',
    'font-awesome-loader',
    'bootstrap-loader',
    path.join(rootDir, 'src', 'router.js'),
  ],
  output: {
    path: path.join(rootDir, 'dist', 'build'),
    publicPath: '/build/',
    filename: 'bundle.min.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
          'postcss',
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?modules&importLoaders=2&localIdentName=[name]__[local]__[hash:base64:5]',
          'postcss',
          'sass',
        ],
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=10000',
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'file',
      },
      {
        test: webpackIsomorphicToolsPlugin.regular_expression('images'),
        loader: 'url-loader?limit=10240',
        // any image below or equal to 10K will be converted to inline base64 instead
      },
      {
        test: /bootstrap[\/\\]dist[\/\\]js[\/\\]umd[\/\\]/,
        loader: 'imports?jQuery=jquery',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.HOST': JSON.stringify(HOST),
      'process.env.PORT': JSON.stringify(PORT),
      'process.env.API_HOST': JSON.stringify(API_HOST),
      'process.env.API_PORT': JSON.stringify(API_PORT),
      'process.env.SOCKET_HOST': JSON.stringify(SOCKET_HOST),
      'process.env.SOCKET_PORT': JSON.stringify(SOCKET_PORT),
      'process.env.CDN_URL': JSON.stringify(CDN_URL),
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true,  // <-------- DISABLE redux-devtools HERE
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      'window.Tether': 'tether',
    }),
    webpackIsomorphicToolsPlugin,
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
  postcss: [autoprefixer],
  resolve: {
    // 設定後只需要寫 require('file') 而不用寫成 require('file.jsx')
    extensions: ['', '.js', 'jsx', '.json', '.scss'],
  },
};

module.exports = config;
