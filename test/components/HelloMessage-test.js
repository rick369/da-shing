import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import HelloMessage from '../../src/components/HelloMessage';

describe("HelloMessage Components", function() {
  it("should contains Hello text", function() {
    expect(shallow(<HelloMessage name="Ben" />).contains(
      <span>Hello,</span>
    )).to.equal(true);
  });

  it("should is hello-message class", function() {
    expect(shallow(<HelloMessage name="Ben" />).is('.hello-message')).to.equal(true);
  });

  it("should can find 1 .name class child", function() {
    expect(mount(<HelloMessage name="Ben" />).find('.name').length).to.equal(1);
  });
});
