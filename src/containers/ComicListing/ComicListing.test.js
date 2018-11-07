import React from "react";

import { shallow, mount } from "enzyme";

import { ComicListing, mapStateToProps, mapDispatchToProps } from "./";

describe("Hero", () => {
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

  it("ComicListing should match snapshot", () => {
    const wrapper = shallow(<ComicListing comics={mockArray} />);
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
        user: { name: "mark", comics: [] },
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
        user: { name: "mark", comics: [] },
        isLoading: undefined,
        hasErrored: undefined
      };

      //execution
      const mappedProps = mapStateToProps(mockState);

      //expectation
      expect(mappedProps).toEqual(expected);
    });
  });
});
