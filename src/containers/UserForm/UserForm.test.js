import React from "react";
import { shallow, mount } from "enzyme";
import {
  UserForm,
  mapStateToProps,
  mapDispatchToProps,
  Input,
  Form
} from "./index.js";
import { userSignedIn } from "../../actions";

describe("UserForm Container", () => {
  it("should match snapshot", () => {
    //setup
    const wrapper = shallow(<UserForm />);

    //expectation
    expect(wrapper).toMatchSnapshot();
  });

  it("should set state with the correct keys and values", () => {
    const wrapper = shallow(<UserForm />);
    const userInput = wrapper.find(Input);

    userInput.simulate("change", {
      target: { user: "user", value: "Mark" }
    });

    expect(wrapper.state()).toEqual({ user: "Mark" });
  });

  describe("handleFormSubmit function", () => {
    let mockForm;
    let wrapper;
    let mockGetUser;
    let mockToggleSignInForm;
    beforeEach(() => {
      mockGetUser = jest.fn();
      mockToggleSignInForm = jest.fn();
      wrapper = shallow(
        <UserForm
          getUser={mockGetUser}
          toggleSignInForm={mockToggleSignInForm}
        />
      );
      mockForm = wrapper.find(Form);
    });

    it("should call handleFormSubmit with the correct params", () => {
      mockForm.simulate("submit", { preventDefault() {} });
      expect(mockGetUser).toHaveBeenCalled();
      expect(mockToggleSignInForm).toHaveBeenCalled();
    });
  });

  describe("mapstateToProps", () => {
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
