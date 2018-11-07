import React from "react";
import { shallow, mount } from "enzyme";
import { addComicToUser } from "../../actions";
import {
  ComicListItem,
  mapStateToProps,
  mapDispatchToProps,
  ComicCard
} from "./index";

describe("ComicListItem", () => {
  let mockArray;
  beforeAll(() => {
    mockArray = [
      {
        id: 1009718,
        name: "Wolverine",
        description:
          "Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable skeleton and claws. Treated like an animal, it took years for him to control himself. Now, he's a premiere member of both the X-Men and the Avengers."
      },
      {
        id: 1009718,
        name: "Wolverine",
        description:
          "Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable skeleton and claws. Treated like an animal, it took years for him to control himself. Now, he's a premiere member of both the X-Men and the Avengers."
      }
    ];
  });

  it("ComicListingItem should match snapshot", () => {
    const wrapper = shallow(<ComicListItem comic={mockArray} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should toggle displayComicData state", () => {
    const expectedState = {
      displayComicData: true
    };
    const wrapper = shallow(<ComicListItem comic={mockArray} />);
    wrapper.instance().toggleHoverState();

    expect(wrapper.state()).toEqual(expectedState);
  });

  describe("mapStateToProps", () => {
    it("should add user to state", () => {
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
        user: { name: "Mark", comics: [] },
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
        user: { name: "Mark", comics: [] },
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
    it("calls dispatch with an addComicToUser action when addComic is called", () => {
      //setup
      const comic = {
        id: 1009718,
        name: "Wolverine",
        description:
          "Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable skeleton and claws. Treated like an animal, it took years for him to control himself. Now, he's a premiere member of both the X-Men and the Avengers."
      };
      const mockDispatch = jest.fn();
      const actionToDispatch = addComicToUser(comic);
      //execution
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addComicToUser(comic);

      //expectation
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

  it.skip("should handle click events", () => {
    const mockAddComic = jest.fn();
    const mockAddComicToUser = jest.fn();
    const wrapper = shallow(
      <ComicListItem addComicToUser={mockAddComicToUser} comic={mockArray} />
    );
    wrapper
      .find(ComicCard)
      .at(0)
      .simulate("click");
    expect(mockAddComic).toHaveBeenCalled();
  });
});
