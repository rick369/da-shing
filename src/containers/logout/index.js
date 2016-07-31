import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import { logout } from '../../actions/user';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onLogout: () => {
      dispatch(logout());
    },
  };
}

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class Logout extends React.Component {
  static propTypes = {
    onLogout: React.PropTypes.func.isRequired,
  };
  static contextTypes = {
    router: React.PropTypes.any.isRequired,
  };
  componentDidMount() {
    const { onLogout } = this.props;
    const { router } = this.context;
    onLogout();
    router.replace('/');
  }
  render() {
    return (
      <div>
        <Helmet title="Logout" />
        <h2>Logout</h2>
        <p>You are now logged out</p>
      </div>
    );
  }
}
