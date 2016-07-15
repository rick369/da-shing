import React from 'react';

import { auth } from '../../utils';

class Dashboard extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="dashboard">
        <h2>Dashboard</h2>
        <p>You made it!</p>
        <p>{auth.getToken()}</p>
      </div>
    );
  }
}

export default Dashboard;
