import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { spy } from 'sinon';

import { Login } from '../../../src/containers/login';

describe("Login Container", function() {
  it("should contains Login text", function() {
    expect(shallow(<Login />).contains(
      <h2>Login</h2>
    )).to.equal(true);
  });

  it("should is login class", function() {
    expect(shallow(<Login />).is('.login')).to.equal(true);
  });
});
