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
@translate(['common', 'notFound'])
export default class NotFound extends React.Component {
  static propTypes = {
    t: React.PropTypes.func.isRequired,
  };
  componentDidMount() {}
  render() {
    const { t } = this.props;
    return (
      <section>
        <Helmet
          title={t('nav.notFound')}
          meta={[
            { charset: 'utf-8' },
            { name: 'description', content: t('notFound:meta.description') },
            { property: 'og:title', content: t('notFound:meta.og.title') },
            { property: 'og:url', content: t('notFound:meta.og.url') },
            { property: 'og:image', content: t('notFound:meta.og.image') },
            { property: 'og:description', content: t('notFound:meta.og.description') },
          ]}
        />
        <h2>{t('nav.notFound')}</h2>
      </section>
    );
  }
}
