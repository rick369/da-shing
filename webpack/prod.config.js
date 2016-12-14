const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const path = require('path');

const HOST = require('../config').HOST;
const PORT = require('../config').PORT;
const API_HOST = require('../config').API_HOST;
const API_PORT = require('../config').API_PORT;
const SOCKET_HOST = require('../config').SOCKET_HOST;
const SOCKET_PORT = require('../config').SOCKET_PORT;
const CDN_URL = require('../config').CDN_URL;

const rootDir = path.resolve(__dirname, '..');
const assetsPath = path.resolve(
  path.join(rootDir, 'dist', 'build')
);

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

// https://github.com/halt-hammerzeit/webpack-isomorphic-tools
const WebpackIsomorphicToolsPlugin = require(
  path.join('webpack-isomorphic-tools', 'plugin')
);

/* eslint-disable global-require */
const webpackIsomorphicToolsPlugin =
  new WebpackIsomorphicToolsPlugin(require(
    path.join(__dirname, 'webpack-isomorphic-tools-configuration')
  ));
/* eslint-enable global-require */

const config = {
  entry: [
    'font-awesome-loader',
    path.join('bootstrap-loader', 'extractStyles'),
    'tether',
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
        loader: ExtractTextPlugin.extract(
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]' +
          '!postcss'
        ),
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?modules&importLoaders=2&localIdentName=[name]__[local]__[hash:base64:5]' +
          '!postcss' +
          '!sass'
        ),
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        // Limiting the size of the woff fonts breaks font-awesome ONLY for the extract text plugin
        // loader: "url?limit=10000"
        loader: 'url',
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
    new CleanPlugin([assetsPath], { root: rootDir }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.HOST': JSON.stringify(HOST),
      'process.env.PORT': JSON.stringify(PORT),
      'process.env.API_HOST': JSON.stringify(API_HOST),
      'process.env.API_PORT': JSON.stringify(API_PORT),
      'process.env.SOCKET_HOST': JSON.stringify(SOCKET_HOST),
      'process.env.SOCKET_PORT': JSON.stringify(SOCKET_PORT),
      'process.env.CDN_URL': JSON.stringify(CDN_URL),
      __DEVELOPMENT__: false,
      __DEVTOOLS__: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new ExtractTextPlugin('app.css', { allChunks: true }),
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
