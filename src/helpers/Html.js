import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';
import Helmet from 'react-helmet';

export default class Html extends Component {
  static propTypes = {
    lang: PropTypes.string,
    assets: PropTypes.object,
    component: PropTypes.node,
    store: PropTypes.object,
    i18n: PropTypes.object,
  };
  componentDidMount() {}
  render() {
    const { lang, assets, component, store, i18n } = this.props;
    const content = component ? ReactDOM.renderToString(component) : '';
    const head = Helmet.rewind();

    return (
      <html lang={lang}>
        <head>
          {head.base.toComponent()}
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
          {head.script.toComponent()}

          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* styles (will be present only in production with webpack extract text plugin) */}
          {
            Object.keys(assets.styles).map((style, i) =>
              <link
                href={assets.styles[style]}
                key={i}
                media="screen, projection"
                rel="stylesheet"
                type="text/css"
              />)
          }

        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: content }} />

          <script
            dangerouslySetInnerHTML={{
              __html: `window.INITIAL_STATE=${serialize(store.getState())};`,
            }}
            charSet="UTF-8"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `window.INITIAL_I18N=${serialize(i18n)};`,
            }}
            charSet="UTF-8"
          />

          {/* javascripts */}
          {/* (usually one for each "entry" in webpack configuration) */}
          {/* (for more informations on "entries" see https://github.com/petehunt/webpack-howto/) */}
          {
            Object.keys(assets.javascript).map((script, i) =>
              <script src={assets.javascript[script]} key={i} />)
          }
        </body>
      </html>
    );
  }
}
