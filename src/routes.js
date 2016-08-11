import React from 'react';
import {
  Route,
  IndexRoute,
} from 'react-router';

// containers
import App from './containers/app';
import Home from './containers/home';
import About from './containers/about';
import Login from './containers/login';
import Logout from './containers/logout';
import Dashboard from './containers/dashboard';
import NotFound from './containers/not-found';

function requireAuth(nextState, replace) {
  const serverSideRendering = localStorage.getItem('serverSideRendering');
  if (serverSideRendering) {
    return;
  }
  if (!localStorage.getItem('token')) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
}

function requireNotLoggedIn(nextState, replace) {
  const serverSideRendering = localStorage.getItem('serverSideRendering');
  if (serverSideRendering) {
    return;
  }
  if (localStorage.getItem('token')) {
    replace({
      pathname: '/',
    });
  }
}

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="login" component={Login} onEnter={requireNotLoggedIn} />
    <Route path="logout" component={Logout} onEnter={requireAuth} />
    <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
