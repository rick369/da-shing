import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { translate } from 'react-i18next';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

@connect(
  mapStateToProps,
  mapDispatchToProps
)
@translate(['common', 'about'])
export default class About extends React.Component {
  static propTypes = {
    t: React.PropTypes.func.isRequired,
  };
  componentDidMount() {}
  render() {
    const { t } = this.props;
    return (
      <section>
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
        <h2>{t('nav.about')}</h2>
      </section>
    );
  }
}
