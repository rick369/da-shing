import React from 'react';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';
import classNames from 'classnames';

import style from './style.scss';

import { changeLanguage } from '../../actions/app';

let i18n;
if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  i18n = require('../../i18n/i18n-client');
} else {
  i18n = null;
}

function mapStateToProps(state) {
  return {
    app: state.app.toJS(),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeLanguage({ lang }) {
      dispatch(changeLanguage({ lang }));
    },
  };
}

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class ToggleLanguage extends React.Component {
  static propTypes = {
    app: React.PropTypes.object.isRequired,
    onChangeLanguage: React.PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.onChangeLanguage = this.onChangeLanguage.bind(this);
  }
  componentDidMount() {
    const {
      onChangeLanguage,
    } = this.props;

    if (i18n) {
      onChangeLanguage({ lang: i18n.language });
    }
  }
  onChangeLanguage(e) {
    const { onChangeLanguage } = this.props;
    e.preventDefault();

    if (!i18n) {
      return;
    }

    const lang = e.currentTarget.attributes['data-lang'].value;
    i18n.changeLanguage(lang);
    onChangeLanguage({ lang });
  }
  getLinkActiveClassName(lang) {
    const { app } = this.props;
    const currentLang = app.i18n.lang;

    return classNames({
      [style.linkActive]: currentLang === lang,
    });
  }
  render() {
    const { t } = this.props;

    return (
      <span className={style.toggleLanguage}>
        <span>{t('language')}</span>
        <ul>
          <li>
            <a
              className={this.getLinkActiveClassName('en')}
              onClick={this.onChangeLanguage}
              data-lang="en"
              href="#"
            >
              English
            </a>
          </li>
          <li>
            <a
              className={this.getLinkActiveClassName('zh-TW')}
              onClick={this.onChangeLanguage}
              data-lang="zh-TW"
              href="#"
            >
              繁體中文
            </a>
          </li>
          <li>
            <a
              className={this.getLinkActiveClassName('zh')}
              onClick={this.onChangeLanguage}
              data-lang="zh"
              href="#"
            >
              简体中文
            </a>
          </li>
        </ul>
      </span>
    );
  }
}

ToggleLanguage.propTypes = {
  t: React.PropTypes.func.isRequired,
};

export default translate()(ToggleLanguage);
