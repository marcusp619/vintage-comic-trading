import React from "react";
import { shallow } from "enzyme";
import { UserForm, mapStateToProps, mapDispatchToProps } from "./index.js";
import { userSignedIn } from "../../actions";

describe("UserForm Container", () => {
  it("should match snapshot", () => {
    //setup
    const wrapper = shallow(<UserForm />);

    //expectation
    expect(wrapper).toMatchSnapshot();
  });

  it("mapStateToProps", () => {
    //setup
    const mockState = {
      user: "mark"
    };
    const expected = {
      user: "mark"
    };

    //execution
    const mappedProps = mapStateToProps(mockState);

    //expectation
    expect(mappedProps).toEqual(expected);
  });

  describe("mapDispatchToProps", () => {
    it("calls dispatch with an userSignedIn action", () => {
      //setup
      const mockDispatch = jest.fn();
      const actionToDispatch = userSignedIn("mark");

      //execution
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getUser("mark");

      //expectation
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
