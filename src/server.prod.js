import express from 'express';
import favicon from 'serve-favicon';
import path from 'path';
import serveStatic from 'serve-static';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';

import store from '../src/store';
import routes from '../src/routes';
import Html from '../src/helpers/Html';

import apiRouter from '../api';

const rootDir = path.resolve(__dirname, '..');
const app = express();

app.set('port', (process.env.PORT || 8080));

app.use(favicon(`${rootDir}/dist/favicon.ico`));
app.use(serveStatic(`${rootDir}/dist`, {
  index: false,
}));

app.use('/api', apiRouter);

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

app.use((req, res) => {
  // Note that req.url here should be the full URL path from
  // the original request, including the query string.
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    function getReduxPromise() {
      const { query, params } = renderProps;
      const comp = renderProps.components[renderProps.components.length - 1].WrappedComponent;

      const promise = comp.fetchData ?
        comp.fetchData({ query, params, store }) :
        Promise.resolve();

      return promise;
    }

    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      getReduxPromise().then(() => {
        const component = (
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        );
        res.send(
          renderToString(
            <Html
              assets={global.webpack_isomorphic_tools.assets()}
              component={component}
              store={store}
            />
          )
        );
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
