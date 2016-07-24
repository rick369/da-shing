import i18n from 'i18next';
import Backend from 'i18next-node-fs-backend';
import { LanguageDetector } from 'i18next-express-middleware';

import initOption from './initOption';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .init(initOption);

export default i18n;
