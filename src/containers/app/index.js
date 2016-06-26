import React from 'react';

import Header from '../../components/header';

const App = (props) => (
  <div>
    <Header name="Ben" />
    {props.children}
  </div>
);

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default App;
