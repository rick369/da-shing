import React from 'react';

import Header from '../../components/header';
import DevTools from '../DevTools';

import { auth } from '../../utils';

class App extends React.Component {
  componentDidMount() {}
  render() {
    const isLoggedIn = auth.loggedIn();
    const user = auth.getUser();
    return (
      <div>
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
