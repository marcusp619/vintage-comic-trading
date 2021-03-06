import React from "react";

import { shallow } from "enzyme";

import { UserLoggedIn } from "./";

describe("UserLoggedIn", () => {
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
  it("UserLoggedIn should match snapshot", () => {
    const wrapper = shallow(
      <UserLoggedIn
        comics={mockArray}
        user={{ name: "mark", comics: mockArray }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
