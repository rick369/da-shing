import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import Info from './components/Info';

import { fetchInfoData } from '../../actions/info';

class About extends React.Component {
  componentDidMount() {
    const { onFetchInfoData } = this.props;
    onFetchInfoData();
  }
  render() {
    const { t, info } = this.props;
    return (
      <div>
        <h2>{t('about')}</h2>
        <Info data={info.data} />
      </div>
    );
  }
}

About.propTypes = {
  t: React.PropTypes.func,
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
)(
  translate('nav', { wait: true })(About)
);
