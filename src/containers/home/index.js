import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

class Home extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <Helmet title="Home" />
        <h2>Home</h2>
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
)(Home);
