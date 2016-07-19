require('babel-polyfill');

module.exports = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Init Project Web',
    description: 'Init Project Web',
    head: {
      titleTemplate: 'Init Web - %s',
      meta: [
        {charset: 'utf-8'},
        {name: 'description', content: '網頁描述'},
        {property: 'og:title', content: '網站名稱或標題'},
        {property: 'og:url', content: '網址'},
        {property: 'og:image', content: '要顯示的縮圖網址'},
        {property: 'og:description', content: '網頁描述'},
      ]
    }
  },
};
