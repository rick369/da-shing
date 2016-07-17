import React from 'react';

import { translate } from 'react-i18next';

import { i18n } from '../../utils';

import style from './style';

class Language extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeLanguage = this.onChangeLanguage.bind(this);
  }
  onChangeLanguage(e) {
    const lang = e.currentTarget.attributes['data-lang'].value;
    i18n.changeLanguage(lang);
  }
  getLanguageLinkStyle(lang) {
    const currentLanguage = i18n.language;
    let linkStyle;
    if (currentLanguage === lang) {
      linkStyle = Object.assign({}, style.languageLink, style.languageActive);
    } else {
      linkStyle = style.languageLink;
    }
    return linkStyle;
  }
  render() {
    const { t } = this.props;
    const enLanguageLinkStyle = this.getLanguageLinkStyle('en');
    const zhtwLanguageLinkStyle = this.getLanguageLinkStyle('zh-TW');
    const zhLanguageLinkStyle = this.getLanguageLinkStyle('zh');
    return (
      <div>
        <h2>{t('language')}</h2>
        <ul>
          <li data-lang="en" onClick={this.onChangeLanguage}>
            <span style={enLanguageLinkStyle}>English</span>
          </li>
          <li data-lang="zh-TW" onClick={this.onChangeLanguage}>
            <span style={zhtwLanguageLinkStyle}>繁體中文</span>
          </li>
          <li data-lang="zh" onClick={this.onChangeLanguage}>
            <span style={zhLanguageLinkStyle}>简体中文</span>
          </li>
        </ul>
      </div>
    );
  }
}

Language.propTypes = {
  t: React.PropTypes.func,
};

export default translate('common', { wait: true })(Language);
