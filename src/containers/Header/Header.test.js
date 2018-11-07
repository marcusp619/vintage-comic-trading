import React from "react";

import { shallow } from "enzyme";

import { Header, Button } from "./index";

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
        comics: [
          {
            id: 1009718,
            name: "Wolverine",
            description:
              "Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable skeleton and claws. Treated like an animal, it took years for him to control himself. Now, he's a premiere member of both the X-Men and the Avengers."
          }
        ],
        isLoading: undefined,
        hasErrored: undefined
      };
});
