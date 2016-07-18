import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Home from '../../../src/containers/home';

describe("Home Container", function() {
  it("should contains Home text", function() {
    expect(shallow(<Home />).contains(
      <h2>Home</h2>
    )).to.equal(true);
  });

  it("should is home class", function() {
    expect(shallow(<Home />).is('.home')).to.equal(true);
  });
});
