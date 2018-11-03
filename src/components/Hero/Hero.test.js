import React from 'react';

import {shallow} from 'enzyme';

import Hero from './index';

describe('Hero', () => {
  it('Hero should match snapshot', () => {
    const wrapper = shallow(<Hero />);
    expect(wrapper).toMatchSnapshot();
  });
});
