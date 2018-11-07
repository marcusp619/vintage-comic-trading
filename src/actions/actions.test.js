import * as actions from ".";

describe("actions", () => {
  it("should have a type of IS_LOADING", () => {
    //setup
    const bool = "true";

    const expectedAction = {
      type: "IS_LOADING",
      isLoading: "true"
    };

    //execution
    const result = actions.isLoading(bool);

    //expectation
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of hasErrored", () => {
    //setup
    const bool = "true";

    const expectedAction = {
      type: "HAS_ERRORED",
      hasErrored: "true"
    };

    //execution
    const result = actions.hasErrored(bool);

    //expectation
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of COMICS_FETCH_DATA_SUCCESS", () => {
    //setup
    const comic = {
      id: 1009718,
      name: "Wolverine",
      description:
        "Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable skeleton and claws. Treated like an animal, it took years for him to control himself. Now, he's a premiere member of both the X-Men and the Avengers."
    };

    const expectedAction = {
      type: "COMICS_FETCH_DATA_SUCCESS",
      comic
    };

    //execution
    const result = actions.comicFetchDataSuccess(comic);

    //expectation
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of USER_SIGNED_IN", () => {
    //setup
    const user = {
      name: "mark"
    };

    const expectedAction = {
      type: "USER_SIGNED_IN",
      user
    };

    //execution
    const result = actions.userSignedIn(user);

    //expected
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of USER_SIGNED_OUT", () => {
    //setup
    const user = {
      name: "mark"
    };

    const expectedAction = {
      type: "USER_SIGNED_OUT",
      user
    };

    //execution
    const result = actions.userSignedOut(user);

    //expected
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of ADD_COMIC_TO_USER", () => {
    //setup
    const comic = {
      id: 1009718,
      name: "Wolverine",
      description:
        "Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable skeleton and claws. Treated like an animal, it took years for him to control himself. Now, he's a premiere member of both the X-Men and the Avengers."
    };

    const expectedAction = {
      type: "ADD_COMIC_TO_USER",
      comic
    };

    //execution
    const result = actions.addComicToUser(comic);

    //expected
    expect(result).toEqual(expectedAction);
  });
});
