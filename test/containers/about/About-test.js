import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { spy } from 'sinon';

import About from '../../../src/containers/about';

describe("About Container", function() {
  // Shallow Rendering API
  it("should contains Home text", function() {
    expect(shallow(<About />).contains(
      <h2>About</h2>
    )).to.equal(true);
  });

  it("should is home class", function() {
    expect(shallow(<About />).is('.about')).to.equal(true);
  });

  // Full Rendering API (mount(...))
  it('calls componentDidMount', () => {
    spy(About.prototype, 'componentDidMount');
    const wrapper = mount(<About />);
    expect(About.prototype.componentDidMount.calledOnce).to.equal(true);
  });
  it('calls sayHello', () => {
    spy(About.prototype, 'sayHello');
    const wrapper = mount(<About />);
    expect(About.prototype.sayHello.calledOnce).to.equal(true);
  });
});
