import express from 'express';
import favicon from 'serve-favicon';
import path from 'path';
import serveStatic from 'serve-static';
import fs from 'fs';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';

import i18nMiddleware from 'i18next-express-middleware';
import { I18nextProvider, loadNamespaces } from 'react-i18next';

import config from '../../config';

import i18n from '../i18n/i18n-server';
import { ns } from '../i18n/initOption';

import store from '../store';
import routes from '../routes';
import Html from '../helpers/Html';

const rootDir = path.resolve(__dirname, '../..');
const app = express();

app.set('port', (process.env.PORT || 8080));
app.set('views', path.join(rootDir, 'views'));
app.set('view engine', 'pug');

app.use(favicon(
  path.join(rootDir, 'dist', 'favicon.ico')
));
app.use(serveStatic(
  path.join(rootDir, 'dist'), {
    index: false,
  }
));
app.use(i18nMiddleware.handle(i18n));

/* eslint-disable no-underscore-dangle */
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';
global.__DEVTOOLS__ = false;
/* eslint-enable no-underscore-dangle */

app.get('**/locales/**', (req, res) => {
  const localesPath = req.path.substr(req.path.indexOf('/locales'));
  const filePath = rootDir + localesPath;
  fs.stat(filePath, (err) => {
    if (err) {
      res.status(404).send('Sorry, we cannot find that!');
    }
    res.sendFile(filePath);
  });
});

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

  const i18nServer = i18n.cloneInstance();
  i18nServer.changeLanguage(locale);

  // Note that req.url here should be the full URL path from
  // the original request, including the query string.
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      loadNamespaces({ ...renderProps, i18n: i18nServer })
      .then(() => {
        const component = (
          <I18nextProvider i18n={i18nServer}>
            <Provider store={store}>
              <RouterContext {...renderProps} />
            </Provider>
          </I18nextProvider>
        );
        res.send(
          renderToString(
            <Html
              lang={locale}
              assets={global.webpack_isomorphic_tools.assets()}
              component={component}
              store={store}
              i18n={i18nClient}
            />
          )
        );
      });
    } else {
      res.status(404).send('Not found');
    }
  });
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(500);
  res.render('error', {
    title: config.appName,
    error: err,
  });
});

app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log('Node app is running on port', app.get('port'));
});
