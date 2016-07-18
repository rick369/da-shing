import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Dashboard from '../../../src/containers/dashboard';

describe("Dashboard Container", function() {
  it("should contains Dashboard text", function() {
    expect(shallow(<Dashboard />).contains(
      <h2>Dashboard</h2>
    )).to.equal(true);
  });

  it("should is dashboard class", function() {
    expect(shallow(<Dashboard />).is('.dashboard')).to.equal(true);
  });
});
