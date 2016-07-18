import React from 'react';
import { connect } from 'react-redux';

import Info from './components/Info';

import { fetchInfoData } from '../../actions/info';

class About extends React.Component {
  componentDidMount() {
    const { onFetchInfoData } = this.props;
    onFetchInfoData();
  }
  render() {
    const { info } = this.props;
    return (
      <div className="about">
        <h2>About</h2>
        <Info data={info.data} />
      </div>
    );
  }
}

About.propTypes = {
  onFetchInfoData: React.PropTypes.func,
  info: React.PropTypes.object,
};

function mapStateToProps(state) {
  return {
    info: state.info,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchInfoData: () => {
      dispatch(fetchInfoData());
    },
  };
}

export {
  About,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
