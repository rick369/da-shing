import express from 'express';
import favicon from 'serve-favicon';
import path from 'path';
import fs from 'fs';

const rootDir = path.resolve(__dirname, '../..');

const app = express();

app.set('port', (process.env.PORT || 3000));

app.use(favicon(`${rootDir}/dist/favicon.ico`));

import apiRouter from '../../api';
app.use('/api', apiRouter);

import webpackDevMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import webpackConfig from '../../webpack';
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  contentBase: 'dist',
  quiet: true,
  noInfo: true,
  hot: true,
  inline: true,
  publicPath: webpackConfig.output.publicPath,
  headers: { 'Access-Control-Allow-Origin': '*' },
}));

/* eslint-disable no-console */
app.use(require('webpack-hot-middleware')(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
}));
/* eslint-enable no-console */

app.get('/locales/**', (req, res) => {
  const filePath = rootDir + req.path;
  fs.stat(filePath, (err) => {
    if (err) {
      res.status(404).send('Sorry, we cannot find that!');
    }
    res.sendFile(filePath);
  });
});

app.use((req, res) => {
  res.sendFile(`${rootDir}/dist/index.html`);
});


app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log('Node app is running on port', app.get('port'));
});
