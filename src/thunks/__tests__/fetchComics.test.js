import { fetchComics } from "../fetchComic";
import { isLoading, hasErrored, comicFetchDataSuccess } from "../../actions";

describe("fetchComic", () => {
  let mockDispatch;
  let mockComic;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockComic = {
      data: {
        results: {
          id: 1009718,
          name: "Wolverine",
          description:
            "Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable skeleton and claws. Treated like an animal, it took years for him to control himself. Now, he's a premiere member of both the X-Men and the Avengers."
        }
      }
    };
  });

  it("should dispatch hasErrored(true)", async () => {
    window.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false
      })
    );
    const thunk = fetchComics();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored(true));
  });
});
