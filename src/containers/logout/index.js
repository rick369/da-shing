import React from 'react';

import { auth } from '../../utils';

class Logout extends React.Component {
  componentDidMount() {
    auth.logout(() => {
      this.context.router.replace('/');
    });
  }
  render() {
    return (
      <div className="logout">
        <h2>Logout</h2>
        <p>You are now logged out</p>
      </div>
    );
  }
}

Logout.contextTypes = {
  router: React.PropTypes.any,
};

export default Logout;
