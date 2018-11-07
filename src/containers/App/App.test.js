import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";

import { App, mapStateToProps, mapDispatchToProps } from "./App";
import { fetchComics } from "../../thunks/fetchComic";

describe("App Container", () => {
  it("should match snapshot", () => {
    //setup
    const wrapper = shallow(<App />);

    //expectation
    expect(wrapper).toMatchSnapshot();
  });

  describe("mapStateToProps", () => {
    it("should return an object to with the comics array", () => {
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
      const expected = {
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

      //execution
      const mappedProps = mapStateToProps(mockState);

      //expectation
      expect(mappedProps).toEqual(expected);
    });
  });

  describe("mapDispatchToProps", () => {
    it("calls dispatch with an fetchComics action when fetchCharacterData is called", () => {
      //setup
      const mockDispatch = jest.fn();
      const actionToDispatch = fetchComics();

      //execution
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.fetchComics();

      //expectation
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
