import express from 'express';
import favicon from 'serve-favicon';
import path from 'path';
import serveStatic from 'serve-static';

const rootDir = path.resolve(__dirname, '..');
const app = express();

app.set('port', (process.env.PORT || 8080));
app.set('view engine', 'pug');

app.use(favicon(rootDir + '/dist/favicon.ico'));
app.use(serveStatic(rootDir + '/dist', {
  'index': false
}));

import apiRouter from '../api';
app.use('/api', apiRouter);

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
  localStorage.setItem('serverSideRendering', 'true');
}

import React from 'react';;
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

import store from '../src/store';
import routes from '../src/routes';
import { Provider } from 'react-redux';
app.use((req, res) => {
  // Note that req.url here should be the full URL path from
  // the original request, including the query string.
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      getReduxPromise().then(()=> {
        const InitialComponent = (
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        );

        const initialState = store.getState();
        const componentHTML = renderToString(InitialComponent);

        res.render('index', {
          initialState,
          componentHTML
        });
      });

      function getReduxPromise () {
        let { query, params } = renderProps;
        let comp = renderProps.components[renderProps.components.length - 1].WrappedComponent;

        let promise = comp.fetchData ?
          comp.fetchData({ query, params, store }) :
          Promise.resolve();

        return promise;
      }
    } else {
      res.status(404).send('Not found')
    }
  })
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
