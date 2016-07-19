import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

class NotFound extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <Helmet title="Not Found" />
        <h2>Not Found</h2>
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
)(NotFound);
