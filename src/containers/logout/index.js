import React from 'react';
import { connect } from 'react-redux';

import { auth } from '../../utils';

class Logout extends React.Component {
  componentDidMount() {
    auth.logout(() => {
      this.context.router.replace('/');
    });
  }
  render() {
    return (
      <div>
        <h2>Logout</h2>
        <p>You are now logged out</p>
      </div>
    );
  }
}

Logout.propTypes = {};

Logout.contextTypes = {
  router: React.PropTypes.any,
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
