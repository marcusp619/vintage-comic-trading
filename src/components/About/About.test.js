import React from "react";

import { shallow } from "enzyme";

import About from "./index";

describe("About", () => {
  it("Hero should match snapshot", () => {
    const wrapper = shallow(<About />);
    expect(wrapper).toMatchSnapshot();
  });
});
