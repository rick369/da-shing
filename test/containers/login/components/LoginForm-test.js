import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import { spy } from 'sinon';

import LoginForm from '../../../../src/containers/login/components/login-form';

describe("Login's LoginForm Component", function() {
  it("should contains email text", function() {
    expect(shallow(<LoginForm />).contains(
      <span>email:</span>
    )).to.equal(true);
  });

  it("should contains password text", function() {
    expect(shallow(<LoginForm />).contains(
      <span>password:</span>
    )).to.equal(true);
  });

  it('simulates handleSubmit submit events', () => {
    const handleSubmit = spy();
    const wrapper = mount(
      <LoginForm handleSubmit={handleSubmit} />
    );
    wrapper.find('form').simulate('submit');
    expect(handleSubmit.calledOnce).to.equal(true);
  });
});
