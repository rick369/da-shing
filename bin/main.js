const path = require('path');

if (typeof localStorage === 'undefined' || localStorage === null) {
  // eslint-disable-next-line global-require
  const LocalStorage = require('node-localstorage').LocalStorage;
  // eslint-disable-next-line no-native-reassign
  global.localStorage = new LocalStorage(
    path.join('.', 'scratch')
  );
  localStorage.setItem('serverSideRendering', 'true');
}

const WebpackIsomorphicTools = require('webpack-isomorphic-tools');
const rootDir = path.resolve(__dirname, '..');

global.webpack_isomorphic_tools = new WebpackIsomorphicTools(
  // eslint-disable-next-line global-require
  require(
    path.join(rootDir, 'webpack', 'webpack-isomorphic-tools-configuration')
  )
)
.development(process.env.NODE_ENV === 'development')
.server(rootDir, () => {
  // eslint-disable-next-line global-require
  require(
    path.join(rootDir, 'src', 'server')
  );
});
