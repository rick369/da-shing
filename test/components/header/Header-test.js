import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Header from '../../../src/components/header';

describe("Header Component", function() {

  it("should is hello-message class", function() {
    expect(shallow(<Header name="Ben" />).is('.header')).to.equal(true);
  });

  it("should can find 1 .name class child", function() {
    expect(mount(<Header name="Ben" />).find('.name').length).to.equal(1);
  });
});
