import express from 'express';
import favicon from 'serve-favicon';
import path from 'path';

const rootDir = path.resolve(__dirname, '..');

const app = express();

app.set('port', (process.env.PORT || 3000));

app.use(favicon(rootDir + '/dist/favicon.ico'));

import apiRouter from '../api';
app.use('/api', apiRouter);

import webpackDevMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import webpackConfig from '../webpack';
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  contentBase: 'dist',
  quiet: true,
  noInfo: true,
  hot: true,
  inline: true,
  publicPath: webpackConfig.output.publicPath,
  headers: {'Access-Control-Allow-Origin': '*'}
}));

app.use(require("webpack-hot-middleware")(compiler, {
  log: console.log,
  path: '/__webpack_hmr'
}));

app.use(function(req, res, next) {
  res.sendFile(rootDir + '/dist/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
