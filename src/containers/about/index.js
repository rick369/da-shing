import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

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
      <div>
        <Helmet title="About Us" />
        <h2>About</h2>
        {
          info.isFetching ?
            <i className="fa fa-spinner fa-spin"></i> :
            <Info data={info.data} />
        }
      </div>
    );
  }
}

About.fetchData = ({ store }) => store.dispatch(fetchInfoData());

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
