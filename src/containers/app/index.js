import React from 'react';

import Header from '../header';
import DevTools from '../DevTools';

const App = (props) => (
  <div>
    <div>
      <Header />
      {props.children}
    </div>
    {process.env.NODE_ENV === 'development' && <DevTools />}
  </div>
);

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default App;
