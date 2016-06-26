import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Info from '../../../../src/containers/home/components/Info';

describe("Info Container", function() {

  it("should is info class", function() {
    expect(shallow(<Info />).is('.info')).to.equal(true);
  });
});
