import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';
import Helmet from 'react-helmet';

class Html extends Component {
  componentDidMount() {}
  render() {
    const { component, store } = this.props;
    const content = component ? ReactDOM.renderToString(component) : '';
    const head = Helmet.rewind();
    return (
      <html lang="en-us">
        <head>
          {head.base.toComponent()}
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
          {head.script.toComponent()}

          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: content }} />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.INITIAL_STATE=${serialize(store.getState())};`,
            }}
            charSet="UTF-8"
          />
          <script src="/build/bundle.js" charSet="UTF-8" />
        </body>
      </html>
    );
  }
}

Html.propTypes = {
  component: PropTypes.node,
  store: PropTypes.object,
};

export default Html;
