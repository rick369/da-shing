import express from 'express';
import favicon from 'serve-favicon';
import path from 'path';
import fs from 'fs';
import serialize from 'serialize-javascript';

const rootDir = path.resolve(__dirname, '../..');

const app = express();

app.set('port', (process.env.PORT || 3000));
app.set('views', `${rootDir}/views`);
app.set('view engine', 'pug');

app.use(favicon(`${rootDir}/dist/favicon.ico`));

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

import i18nMiddleware from 'i18next-express-middleware';

import i18n from '../i18n/i18n-server';
import { ns } from '../i18n/initOption';
app.use(i18nMiddleware.handle(i18n));

app.use((req, res) => {
  const locale = req.language;
  const resources = ns.map((currentNS) => {
    const resource = {
      ns: currentNS,
      content: i18n.getResourceBundle(locale, currentNS),
    };
    return resource;
  });
  const i18nClient = { locale, resources };

  res.render('index', {
    i18n: serialize(i18nClient),
  });
});


app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log('Node app is running on port', app.get('port'));
});
