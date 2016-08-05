const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const assetsPath = path.resolve(rootDir, './dist/build');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

// https://github.com/halt-hammerzeit/webpack-isomorphic-tools
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');

/* eslint-disable global-require */
const webpackIsomorphicToolsPlugin =
  new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools-configuration'));
/* eslint-enable global-require */

const config = {
  entry: [
    'font-awesome-loader',
    'bootstrap-loader/extractStyles',
    'tether',
    './src/router.js',
  ],
  output: {
    path: `${rootDir}/dist/build`,
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
    ],
  },
  plugins: [
    new CleanPlugin([assetsPath], { root: rootDir }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.HOST': JSON.stringify(process.env.HOST),
      'process.env.PORT': JSON.stringify(process.env.PORT),
      'process.env.APIHOST': JSON.stringify(process.env.APIHOST),
      'process.env.APIPORT': JSON.stringify(process.env.APIPORT),
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
  ],
  postcss: [autoprefixer],
};

module.exports = config;
