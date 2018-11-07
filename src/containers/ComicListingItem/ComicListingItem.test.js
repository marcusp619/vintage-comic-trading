import React from "react";

import { shallow } from "enzyme";

import { ComicListingItem } from "./index";

describe("ComicListingItem", () => {
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
    const wrapper = shallow(<ComicListingItem comics={mockArray} />);
    expect(wrapper).toMatchSnapshot();
  });
});
