import React from 'react';

import Info from './components/Info';

class About extends React.Component {
  componentDidMount() {
    this.sayHello();
  }
  sayHello() {
  }
  render() {
    return (
      <div className="about">
        <h2>About</h2>
        <Info onButtonClick={this.sayHello} />
      </div>
    );
  }
}

export default About;
