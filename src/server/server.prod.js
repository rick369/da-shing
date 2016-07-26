import express from 'express';
import favicon from 'serve-favicon';
import path from 'path';
import serveStatic from 'serve-static';
import fs from 'fs';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import { loadOnServer } from 'redux-async-connect';

import i18nMiddleware from 'i18next-express-middleware';
import { I18nextProvider, loadNamespaces } from 'react-i18next';

import i18n from '../i18n/i18n-server';
import { ns } from '../i18n/initOption';

import store from '../store';
import routes from '../routes';
import Html from '../helpers/Html';

const rootDir = path.resolve(__dirname, '../..');
const app = express();

app.set('port', (process.env.PORT || 8080));

app.use(favicon(`${rootDir}/dist/favicon.ico`));
app.use(serveStatic(`${rootDir}/dist`, {
  index: false,
}));
app.use(i18nMiddleware.handle(i18n));

if (typeof localStorage === 'undefined' || localStorage === null) {
  // eslint-disable-next-line global-require
  const LocalStorage = require('node-localstorage').LocalStorage;
  // eslint-disable-next-line no-native-reassign
  global.localStorage = new LocalStorage('./scratch');
  localStorage.setItem('serverSideRendering', 'true');
}

/* eslint-disable no-underscore-dangle */
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';
global.__DEVTOOLS__ = false;
/* eslint-enable no-underscore-dangle */

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
        loadOnServer({ ...renderProps, store }).then(() => {
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
                assets={global.webpack_isomorphic_tools.assets()}
                component={component}
                store={store}
                i18n={i18nClient}
              />
            )
          );
        });
      });
    } else {
      res.status(404).send('Not found');
    }
  });
});

app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log('Node app is running on port', app.get('port'));
});
