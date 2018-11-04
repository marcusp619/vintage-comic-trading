import React from "react";

import { shallow } from "enzyme";

import { Header } from "./index";

describe("Header", () => {
  it("Header should match snapshot", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should update the state when toggleSignInForm is called", () => {
    const wrapper = shallow(<Header />);
    const expectedState = { isVisible: true };

    wrapper.instance().toggleSignInForm();

    expect(wrapper.state()).toEqual(expectedState);
  });
});
