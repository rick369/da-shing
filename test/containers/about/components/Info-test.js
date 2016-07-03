import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { spy } from 'sinon';

import Info from '../../../../src/containers/about/components/Info';

describe("About's Info Component", function() {
  // Shallow Rendering API
  it("should is info class", function() {
    expect(shallow(<Info />).is('.info')).to.equal(true);
  });

  // Full Rendering API (mount(...))
  it('allows us to set props', () => {
    const wrapper = mount(<Info name="Sherry" />);
    expect(wrapper.props().name).to.equal("Sherry");
    wrapper.setProps({ name: "Ben" });
    expect(wrapper.props().name).to.equal("Ben");
  });

  it('simulates onButtonClick click events', () => {
    const onButtonClick = spy();
    const wrapper = mount(
      <Info onButtonClick={onButtonClick} />
    );
    wrapper.find('button').simulate('click');
    expect(onButtonClick.calledOnce).to.equal(true);
  });
});
