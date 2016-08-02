import React from 'react';
import Helmet from 'react-helmet';
import { translate } from 'react-i18next';

import kitten from './kitten.jpg';

@translate(['common', 'home'])
export default class Home extends React.Component {
  static propTypes = {
    t: React.PropTypes.func.isRequired,
  }
  componentDidMount() {}
  render() {
    const { t } = this.props;
    return (
      <section>
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
      </section>
    );
  }
}
