const ns = [
  'common',
  'home',
  'about',
  'cardColumns',
  'dashboard',
  'logout',
];

const initOption = {
  whitelist: ['en', 'zh-TW', 'zh'], // array of allowed languages
  fallbackLng: 'en', // language to lookup key if not found on set language

  ns, // string or array of namespaces
  defaultNS: 'common', // default namespace used if not passed to translation function

  debug: false, // logs out more info (console)

  interpolation: {
    // escapes passed in values to avoid xss injection
    escapeValue: false, // not needed for react!!
  },

  backend: {
    loadPath: 'locales/{{lng}}/{{ns}}.json',
    jsonIndent: 2,
  },
};

export default initOption;
