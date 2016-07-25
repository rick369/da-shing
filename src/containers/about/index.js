import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { asyncConnect } from 'redux-async-connect';
import { translate } from 'react-i18next';

import Info from './components/Info';
import Fetching from '../../components/fetching';

import { fetchInfoData } from '../../actions/info';

function mapStateToProps(state) {
  return {
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

    if (!getState().info.toJS().loaded) {
      promises.push(dispatch(fetchInfoData()));
    }

    return Promise.all(promises);
  },
}])
@connect(
  mapStateToProps,
  mapDispatchToProps
)
@translate(['common', 'about'])
export default class About extends React.Component {
  static propTypes = {
    t: React.PropTypes.func.isRequired,
    info: React.PropTypes.object.isRequired,
  };
  componentDidMount() {}
  render() {
    const { t, info } = this.props;
    return (
      <div>
        <Helmet
          title={t('nav.about')}
          meta={[
            { charset: 'utf-8' },
            { name: 'description', content: t('about:meta.description') },
            { property: 'og:title', content: t('about:meta.og.title') },
            { property: 'og:url', content: t('about:meta.og.url') },
            { property: 'og:image', content: t('about:meta.og.image') },
            { property: 'og:description', content: t('about:meta.og.description') },
          ]}
        />
        <h2>About</h2>
        {
          info.isFetching ?
            <Fetching /> :
            <Info data={info.data} />
        }
      </div>
    );
  }
}
