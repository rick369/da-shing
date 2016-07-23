import React from 'react';
import Helmet from 'react-helmet';

import Header from '../header';
import DevTools from '../DevTools';

import { auth } from '../../utils';

import config from '../../../config';

class App extends React.Component {
  componentDidMount() {}
  render() {
    const isLoggedIn = auth.loggedIn();
    const user = auth.getUser();
    return (
      <div className="container">
        <Helmet {...config.app.head} />
        <div>
          <Header isLoggedIn={isLoggedIn} user={user} />
          {this.props.children}
        </div>
        {/* eslint-disable no-undef */}
        {process.env.NODE_ENV === 'development' && __DEVTOOLS__ && <DevTools />}
        {/* eslint-enable no-undef */}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default App;
