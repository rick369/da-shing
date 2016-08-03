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
@translate(['common', 'fontAwesomeIcons'])
export default class FontAwesomeIcons extends React.Component {
  static propTypes = {
    t: React.PropTypes.func.isRequired,
  };
  componentDidMount() {}
  render() {
    const { t } = this.props;
    return (
      <div>
        <Helmet
          title={t('nav.fontAwesomeIcons')}
          meta={[
            { charset: 'utf-8' },
            { name: 'description', content: t('fontAwesomeIcons:meta.description') },
            { property: 'og:title', content: t('fontAwesomeIcons:meta.og.title') },
            { property: 'og:url', content: t('fontAwesomeIcons:meta.og.url') },
            { property: 'og:image', content: t('fontAwesomeIcons:meta.og.image') },
            { property: 'og:description', content: t('fontAwesomeIcons:meta.og.description') },
          ]}
        />
        <h2>{t('nav.fontAwesomeIcons')}</h2>
        <div className="row col-items">
          <div className="col-md-4 col-item">
            <span className="fa fa-headphones" />
          </div>
          <div className="col-md-4 col-item">
            <span className="fa fa-glass" />
          </div>
          <div className="col-md-4 col-item">
            <span className="fa fa-thumbs-up" />
          </div>
        </div>
      </div>
    );
  }
}
