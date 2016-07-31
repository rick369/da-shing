import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

function mapStateToProps(state) {
  return {
    user: state.user.toJS(),
  };
}

function mapDispatchToProps() {
  return {};
}

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class Dashboard extends React.Component {
  static propTypes = {
    user: React.PropTypes.object.isRequired,
  };
  componentDidMount() {}
  render() {
    const { user } = this.props;
    return (
      <div>
        <Helmet title="Dashboard" />
        <h2>Dashboard</h2>
        <p>You made it!</p>
        <p>{user.token}</p>
      </div>
    );
  }
}
