import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { translate } from 'react-i18next';

import Info from './components/Info';
import Fetching from '../../components/fetching';

import { fetchInfoData } from '../../actions/info';

function mapStateToProps(state) {
  return {
    user: state.user.toJS(),
    info: state.info.toJS(),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchInfoData() {
      dispatch(fetchInfoData());
    },
  };
}

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
    onFetchInfoData: React.PropTypes.func,
  };
  componentDidMount() {
    this.props.onFetchInfoData();
  }
  render() {
    const { user, info, t } = this.props;
    return (
      <section>
        <Helmet
          title={t('nav.dashboard')}
          meta={[
            { charset: 'utf-8' },
            { name: 'description', content: t('dashboard:meta.description') },
            { property: 'og:title', content: t('dashboard:meta.og.title') },
            { property: 'og:url', content: t('dashboard:meta.og.url') },
            { property: 'og:image', content: t('dashboard:meta.og.image') },
            { property: 'og:description', content: t('dashboard:meta.og.description') },
          ]}
        />
        <h2>{t('nav.dashboard')}</h2>
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
