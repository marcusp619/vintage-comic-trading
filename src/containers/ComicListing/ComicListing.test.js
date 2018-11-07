import React from "react";

import { shallow } from "enzyme";

import { ComicListing } from "./";

describe("Hero", () => {
  it("ComicListing should match snapshot", () => {
    const wrapper = shallow(<ComicListing />);
    expect(wrapper).toMatchSnapshot();
  });
});
