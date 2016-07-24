import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import initOption from './initOption';

i18n
  .use(XHR)
  .use(LanguageDetector) // 偵測瀏覽器語系
  .init(initOption);

export default i18n;
