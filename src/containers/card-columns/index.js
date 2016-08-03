import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { translate } from 'react-i18next';

import style from './style.scss';

@translate(['common', 'cardColumns'])
class CardColumns extends React.Component {
  static propTypes = {
    t: React.PropTypes.func.isRequired,
  };
  componentDidMount() {}
  render() {
    const { t } = this.props;
    return (
      <section>
        <Helmet
          title={t('nav.cardColumns')}
          meta={[
            { charset: 'utf-8' },
            { name: 'description', content: t('cardColumns:meta.description') },
            { property: 'og:title', content: t('cardColumns:meta.og.title') },
            { property: 'og:url', content: t('cardColumns:meta.og.url') },
            { property: 'og:image', content: t('cardColumns:meta.og.image') },
            { property: 'og:description', content: t('cardColumns:meta.og.description') },
          ]}
        />
        <h2>{t('nav.cardColumns')}</h2>
        <div className="card-columns">
          <div className="card">
            <div className="card-block">
              <h4 className="card-title">Card title that wraps to a new line</h4>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
                This content is a little bit longer.
              </p>
            </div>
          </div>
          <div className="card card-block">
            <blockquote className="card-blockquote">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer posuere erat a ante.
              </p>
              <footer>
                <small className="text-muted">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </div>
          <div className={`card ${style.pinkCard}`}>
            <div className="card-block">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">
                This card has supporting text below as a natural
                lead-in to additional content.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card card-block card-inverse card-primary text-xs-center">
            <blockquote className="card-blockquote">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer posuere erat.
              </p>
              <footer>
                <small>
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </div>
          <div className="card card-block text-xs-center">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">
              This card has supporting text below as a natural
              lead-in to additional content.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
          <div className="card">
            <blockquote className="card-blockquote">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer posuere erat a ante.
              </p>
              <footer>
                <small className="text-muted">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </div>
          <div className="card card-block text-xs-right">
            <blockquote className="card-blockquote">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer posuere erat a ante.
              </p>
              <footer>
                <small className="text-muted">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </div>
          <div className="card card-block">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">
              This is a wider card with supporting text
              below as a natural lead-in to additional content. This card has even
              longer content than the first to show that equal height action.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardColumns);
