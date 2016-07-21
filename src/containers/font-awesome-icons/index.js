import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

class FontAwesomeIcons extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <Helmet title="Font Awesome Icons" />
        <h2>Font Awesome Icons</h2>
        <div className="row col-items">
          <div className="col-md-4 col-item">
            <span className="fa fa-headphones" />
            <span className="text">It.</span>
          </div>
          <div className="col-md-4 col-item">
            <span className="fa fa-glass" />
            <span className="text">Just.</span>
          </div>
          <div className="col-md-4 col-item">
            <span className="fa fa-thumbs-up" />
            <span className="text">Works.</span>
          </div>
        </div>
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
)(FontAwesomeIcons);
