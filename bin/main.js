const path = require('path');

const WebpackIsomorphicTools = require('webpack-isomorphic-tools');
const rootDir = path.resolve(__dirname, '..');

global.webpack_isomorphic_tools = new WebpackIsomorphicTools(
  // eslint-disable-next-line global-require
  require(`${rootDir}/webpack/webpack-isomorphic-tools-configuration`)
)
.development(process.env.NODE_ENV === 'development')
.server(rootDir, () => {
  // eslint-disable-next-line global-require
  require(`${rootDir}/src/server`);
});
