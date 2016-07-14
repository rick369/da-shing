import React from 'react';
import { connect } from 'react-redux';

import { auth } from '../../utils';

import { initUser } from '../../actions/user';

class Logout extends React.Component {
  componentDidMount() {
    const { onInitUser } = this.props;
    onInitUser();
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

Logout.propTypes = {
  onInitUser: React.PropTypes.func,
};

Logout.contextTypes = {
  router: React.PropTypes.any,
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onInitUser: () => {
      dispatch(initUser());
    },
  };
}

export {
  Logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
