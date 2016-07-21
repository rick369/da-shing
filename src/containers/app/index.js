import React from 'react';
import Helmet from 'react-helmet';

import Header from '../../components/header';
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
        {process.env.NODE_ENV === 'development' && <DevTools />}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default App;
