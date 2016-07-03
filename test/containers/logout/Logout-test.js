import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { spy } from 'sinon';

import Logout from '../../../src/containers/logout';

describe("Logout Container", function() {
  it("should contains Logout text", function() {
    expect(shallow(<Logout />).contains(
      <h2>Logout</h2>
    )).to.equal(true);
  });

  it("should is logout class", function() {
    expect(shallow(<Logout />).is('.logout')).to.equal(true);
  });
});
