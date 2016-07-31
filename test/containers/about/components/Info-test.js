import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { spy } from 'sinon';

import Info from '../../../../src/containers/about/components/Info';

describe("About's Info Component", function() {
  it("should is info class", function() {
    expect(shallow(<Info items={[]} />).is('.info')).to.equal(true);
  });

  it('allows us to set props', () => {
    let items = [];
    const wrapper = mount(<Info items={items} />);
    expect(wrapper.props().items).to.equal(items);
    items = [{id: 1, text: 'hello'}];
    wrapper.setProps({ items: items });
    expect(wrapper.props().items).to.equal(items);
  });
});
