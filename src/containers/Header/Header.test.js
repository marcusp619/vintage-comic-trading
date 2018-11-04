import React from 'react';

import {shallow} from 'enzyme';

import Header from './index';

describe('Header', () => {
  it('Header should match snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
