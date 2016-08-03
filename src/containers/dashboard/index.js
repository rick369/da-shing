import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { translate } from 'react-i18next';
import { asyncConnect } from 'redux-async-connect';

import Info from './components/Info';
import Fetching from '../../components/fetching';

import { fetchInfoData } from '../../actions/info';

function mapStateToProps(state) {
  return {
    user: state.user.toJS(),
    info: state.info.toJS(),
  };
}

function mapDispatchToProps() {
  return {};
}

@asyncConnect([{
  deferred: true,
  promise: ({ store: { dispatch, getState } }) => {
    const promises = [];

    if (!getState().info.toJS().isloaded) {
      promises.push(dispatch(fetchInfoData()));
    }

    return Promise.all(promises);
  },
}])
@connect(
  mapStateToProps,
  mapDispatchToProps
)
@translate(['common', 'dashboard'])
export default class Dashboard extends React.Component {
  static propTypes = {
    user: React.PropTypes.object.isRequired,
    t: React.PropTypes.func.isRequired,
    info: React.PropTypes.object.isRequired,
  };
  componentDidMount() {}
  render() {
    const { user, info, t } = this.props;
    return (
      <section>
        <Helmet title="Dashboard" />
        <h2>{t('nav.dashboart')}</h2>
        <p>{t('dashboard:youMadeIt')}</p>
        <p>{user.token}</p>
        {
          info.isFetching ?
            <Fetching /> :
            <Info items={info.items} errorMessage={info.errorMessage} />
        }
      </section>
    );
  }
}
