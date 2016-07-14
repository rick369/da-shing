import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { spy } from 'sinon';

import { About } from '../../../src/containers/about';

describe("About Container", function() {
  it("should contains About text", function() {
    expect(shallow(<About info={{}} />).contains(
      <h2>About</h2>
    )).to.equal(true);
  });

  it("should is about class", function() {
    expect(shallow(<About info={{}}  />).is('.about')).to.equal(true);
  });
});
