import React from 'react';
import {
  Route,
  IndexRoute,
} from 'react-router';

// containers
import App from './containers/app';
import Home from './containers/home';
import About from './containers/about';
import NotFound from './containers/not-found';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
