import React from "react";

import { shallow } from "enzyme";

import { Header, Button, mapStateToProps } from "./index";

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

  it("should setState to true when button is clicked", () => {
    const wrapper = shallow(<Header />);

    wrapper
      .find(Button)
      .at(0)
      .simulate("click");

    expect(wrapper.state()).toEqual({ isVisible: true });
  });

  describe("mapStateToProps", () => {
    it("should return an object with an user object", () => {
      //setup
      const mockState = {
        user: { name: "mark", comics: [] }
      };

      const expected = {
        user: { name: "mark", comics: [] }
      };

      //execution
      const mappedProps = mapStateToProps(mockState);

      //expectation
      expect(mappedProps).toEqual(expected);
    });
  });
});
