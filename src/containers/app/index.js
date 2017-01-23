import React from 'react';
import Helmet from 'react-helmet';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';

import Header from '../header';
import DevTools from '../DevTools';

import Modal from '../../components/modal';

import { closeModal } from '../../actions/app';

function mapStateToProps(state) {
  return {
    app: state.app.toJS(),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleModalClose() {
      dispatch(closeModal());
    },
  };
}

@connect(
  mapStateToProps,
  mapDispatchToProps
)
@translate()
export default class App extends React.Component {
  static propTypes = {
    t: React.PropTypes.func.isRequired,
    children: React.PropTypes.element.isRequired,
    app: React.PropTypes.object.isRequired,
    handleModalClose: React.PropTypes.func.isRequired,
  };
  componentDidMount() {}
  getModal() {
    const { app, handleModalClose } = this.props;
    if (app.modal.isOpen) {
      return (
        <Modal
          handleModalClose={handleModalClose}
          title={app.modal.title}
          body={app.modal.body}
          isNotHasHeader={app.modal.isNotHasHeader}
          isNotHasFooter={app.modal.isNotHasFooter}
        />
      );
    }
    return false;
  }
  render() {
    const { t } = this.props;

    return (
      <div className="container">
        <Helmet
          titleTemplate={`${t('title')} - %s`}
          meta={[
            { charset: 'utf-8' },
            { name: 'description', content: t('meta.description') },
            { property: 'og:title', content: t('meta.og.title') },
            { property: 'og:url', content: t('meta.og.url') },
            { property: 'og:image', content: t('meta.og.image') },
            { property: 'og:description', content: t('meta.og.description') },
          ]}
          script={[
            {
              src: 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.7.2/socket.io.min.js',
              type: 'text/javascript',
            },
          ]}
        />
        <a href="#content" className="sr-only sr-only-focusable">{t('skipToMainContent')}</a>
        <div>
          <Header />
          <div id="content" tabIndex="-1">
            {this.props.children}
          </div>
        </div>
        {this.getModal()}
        {/* eslint-disable no-undef */}
        {process.env.NODE_ENV === 'development' && __DEVTOOLS__ && <DevTools />}
        {/* eslint-enable no-undef */}
      </div>
    );
  }
}
