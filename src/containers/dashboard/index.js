import React from 'react';
import { connect } from 'react-redux';

import { auth } from '../../utils';

class Dashboard extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <p>You made it!</p>
        <p>{auth.getToken()}</p>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
