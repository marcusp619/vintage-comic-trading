import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';

import {App, mapStateToProps, mapDispatchToProps} from './App' 

describe('App Container', () => {
  it('should match snapshot', () => {
    //setup 
    const wrapper = shallow(<App />)

    //expectation
    expect(wrapper).toMatchSnapshot()
  })
})
