import React from 'react';

import style from './style.scss';

export default class Modal extends React.Component {
  static propTypes = {
    isNotHasHeader: React.PropTypes.bool,
    isNotHasFooter: React.PropTypes.bool,
    title: React.PropTypes.string,
    body: React.PropTypes.string.isRequired,
    handleModalClose: React.PropTypes.func.isRequired,
  };
  constructor() {
    super();
    this.handleBackdropClick = this.handleBackdropClick.bind(this);
  }
  componentDidMount() {}
  getHeader() {
    const {
      isNotHasHeader,
      handleModalClose,
      title,
    } = this.props;

    if (isNotHasHeader) {
      return false;
    }

    return (
      <div className={style.header}>
        <h5 className={style.title}>{title}</h5>
        <i
          className={`fa fa-times ${style.close}`}
          aria-hidden="true"
          onClick={handleModalClose}
        >
        </i>
      </div>
    );
  }
  getFooter() {
    const {
      isNotHasFooter,
      handleModalClose,
    } = this.props;

    if (isNotHasFooter) {
      return false;
    }

    return (
      <div className={style.footer}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleModalClose}
        >
          确认
        </button>
      </div>
    );
  }
  handleBackdropClick() {
    const {
      handleModalClose,
    } = this.props;
    handleModalClose();
  }
  render() {
    const {
      body,
    } = this.props;
    return (
      <div
        className={style.modal}
      >
        <div
          className={style.backdrop}
        >
        </div>
        <div
          className={style.contentBox}
        >
          <div
            className={style.contentBoxBg}
            onClick={this.handleBackdropClick}
          >
          </div>
          <div className={`modal-dialog ${style.dialog}`}>
            <div className={style.content}>
              {this.getHeader()}
              <div
                className={style.body}
                dangerouslySetInnerHTML={{ __html: body }}
              >
              </div>
              {this.getFooter()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
