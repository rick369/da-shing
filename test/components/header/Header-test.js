import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Header from '../../../src/components/header';

const user = {
  name: 'Ben',
};

describe("Header Component", function() {
  it("should is header class", function() {
    expect(shallow(<Header isLoggedIn={true} user={user}/>).is('.header')).to.equal(true);
  });

  it("should can find 1 .name class child", function() {
    expect(mount(<Header isLoggedIn={true} user={user} />).find('.name').length).to.equal(1);
  });
});
