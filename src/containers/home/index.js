import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { translate } from 'react-i18next';

import kitten from './kitten.jpg';

class Home extends React.Component {
  componentDidMount() {}
  render() {
    const { t } = this.props;
    return (
      <div>
        <Helmet
          title={t('nav.home')}
          meta={[
            { charset: 'utf-8' },
            { name: 'description', content: t('home:meta.description') },
            { property: 'og:title', content: t('home:meta.og.title') },
            { property: 'og:url', content: t('home:meta.og.url') },
            { property: 'og:image', content: t('home:meta.og.image') },
            { property: 'og:description', content: t('home:meta.og.description') },
          ]}
        />
        <h2>{t('nav.home')}</h2>
        <div>
          <h3>{t('home:myCat')}</h3>
          <img src={kitten} alt="kitten" />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  t: React.PropTypes.func.isRequired,
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default translate(['common', 'home'])(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
