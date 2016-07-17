import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { spy } from 'sinon';

import Info from '../../../../src/containers/about/components/Info';

describe("About's Info Component", function() {
  it('allows us to set props', () => {
    let data = [];
    const wrapper = mount(<Info data={data} />);
    expect(wrapper.props().data).to.equal(data);
    data = [{id: 1, text: 'hello'}];
    wrapper.setProps({ data: data });
    expect(wrapper.props().data).to.equal(data);
  });
});
