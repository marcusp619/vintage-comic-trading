import { comics, isLoading, hasErrored, user } from "./comics-reducers";

describe("comics reducer", () => {
  it("should return the initial state", () => {
    //setup
    const expected = [];

    //execution
    const result = comics(undefined, []);

    //expectation
    expect(result).toEqual(expected);
  });

  it("should return state with new comic", () => {
    //setup
    const expected = {
      id: 1009718,
      name: "Wolverine",
      description:
        "Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable skeleton and claws. Treated like an animal, it took years for him to control himself. Now, he's a premiere member of both the X-Men and the Avengers."
    };

    const mockAction = {
      type: "COMICS_FETCH_DATA_SUCCESS",
      comic: {
        id: 1009718,
        name: "Wolverine",
        description:
          "Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable skeleton and claws. Treated like an animal, it took years for him to control himself. Now, he's a premiere member of both the X-Men and the Avengers."
      }
    };

    //execution
    const result = comics(undefined, mockAction);

    //expectation
    expect(result).toEqual(expected);
  });

  describe("isLoading reducer", () => {
    it("should return intial state", () => {
      //setup
      const expected = false;

      //execution
      const result = isLoading(undefined, "");

      //expectation
      expect(result).toEqual(expected);
    });

    it("should return state with isLoading false", () => {
      //setup
      const expected = "false";
      const mockAction = {
        type: "IS_LOADING",
        isLoading: "false"
      };

      //execution
      const result = isLoading(undefined, mockAction);

      //expectation
      expect(result).toEqual(expected);
    });

    it("should return state with isLoading true", () => {
      //setup
      const expected = "true";
      const mockAction = {
        type: "IS_LOADING",
        isLoading: "true"
      };

      //execution
      const result = isLoading(undefined, mockAction);

      //expectation
      expect(result).toEqual(expected);
    });
  });

  describe("hasErrored reducer", () => {
    it("should return intial state", () => {
      //setup
      const expected = false;

      //execution
      const result = hasErrored(undefined, "");

      //expectation
      expect(result).toEqual(expected);
    });

    it("should return state with hasErrored false", () => {
      //setup
      const expected = "false";
      const mockAction = {
        type: "HAS_ERRORED",
        hasErrored: "false"
      };

      //execution
      const result = hasErrored(undefined, mockAction);

      //expectation
      expect(result).toEqual(expected);
    });

    it("should return state with hasErrored true", () => {
      //setup
      const expected = "true";
      const mockAction = {
        type: "HAS_ERRORED",
        hasErrored: "true"
      };

      //execution
      const result = hasErrored(undefined, mockAction);

      //expectation
      expect(result).toEqual(expected);
    });
  });

  describe("user reducer", () => {
    it("should return initial state of '' ", () => {
      //setup
      const expected = "";

      //execution
      const result = user(undefined, "");

      //expectation
      expect(result).toEqual(expected);
    });

    it("should return state with new user", () => {
      //setup
      const expected = {
        comics: [],
        name: { name: "Mark", comics: [] }
      };

      const mockAction = {
        type: "USER_SIGNED_IN",
        comics: [],
        user: { name: "Mark", comics: [] }
      };

      //execution
      const result = user(undefined, mockAction);

      //expectation
      expect(result).toEqual(expected);
    });

    it.skip("should return state with user and added comic", () => {
      //setup
      const mockComic = {
        id: 1009718,
        name: "Wolverine",
        description:
          "Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable skeleton and claws. Treated like an animal, it took years for him to control himself. Now, he's a premiere member of both the X-Men and the Avengers."
      };
      const mockState = {
        user: { name: "Mark", comics: [mockComic, mockComic] }
      };

      const expected = {
        comics: [],
        name: { name: "Mark", comics: [mockComic] }
      };

      const mockAction = {
        type: "ADD_COMIC_TO_USER",
        comics: [],
        user: { name: "Mark", comics: [mockComic, mockComic] }
      };

      //execution
      const result = user(undefined, mockAction);
      //expectation
      expect(result).toEqual(expected);
    });
  });
});
