import React from "react";

import { shallow } from "enzyme";

import ErrorPage from "./index";

describe("ErrorPage", () => {
  it("Hero should match snapshot", () => {
    const wrapper = shallow(<ErrorPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
