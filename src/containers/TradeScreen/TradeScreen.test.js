import React from "react";

import { shallow } from "enzyme";

import { TradeScreen } from "./";

describe("TradeScreen", () => {
  it("TradeScreen should match snapshot", () => {
    const wrapper = shallow(<TradeScreen />);
    expect(wrapper).toMatchSnapshot();
  });
});
