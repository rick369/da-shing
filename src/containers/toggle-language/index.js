import React from 'react';
import { translate } from 'react-i18next';

import style from './style.scss';

let i18n;
if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  i18n = require('../../i18n/i18n-client');
} else {
  i18n = null;
}

class ToggleLanguage extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeLanguage = this.onChangeLanguage.bind(this);
  }
  onChangeLanguage(e) {
    e.preventDefault();

    if (!i18n) {
      return;
    }

    const lang = e.currentTarget.attributes['data-lang'].value;
    i18n.changeLanguage(lang);
  }
  getLinkActiveClassName(lang) {
    if (!i18n) {
      return '';
    }

    const currentLang = i18n.language;

    if (currentLang === lang) {
      return style.linkActive;
    }

    return '';
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
