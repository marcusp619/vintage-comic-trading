import React from "react";

import { shallow } from "enzyme";

import { UserLoggedIn } from "./";

describe("UserLoggedIn", () => {
  it("UserLoggedIn should match snapshot", () => {
    const wrapper = shallow(<UserLoggedIn />);
    expect(wrapper).toMatchSnapshot();
  });
});
