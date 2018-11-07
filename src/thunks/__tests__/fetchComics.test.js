import { fetchComics } from "../fetchComic";
import { isLoading, hasErrored, comicFetchDataSuccess } from "../../actions";
import { dispatch } from "rxjs/internal/observable/pairs";
import { cleanComicData } from "../../utils/DataCleaners";

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

  it("should dispatch comicFetchDataSuccess when response is ok", async () => {
    window.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: Promise.resolve(mockData)
      })
    );
    const mockData = {
      data: {
        results: [
          {
            characters: { items: ["a", "b", "c"] },
            description: "",
            images: [
              {
                path:
                  "http://i.annihil.us/u/prod/marvel/i/mg/b/b0/5aea30d90ef12",
                extension: "jpg"
              }
            ],
            prices: [{ type: "printPrice", price: 3.99 }],
            thumbnail: "",
            title: "",
            urls: ["", ""],
            offset: 0
          },
          {
            characters: { items: ["a", "b", "c"] },
            description: "",
            images: [
              {
                path:
                  "http://i.annihil.us/u/prod/marvel/i/mg/b/b0/5aea30d90ef12",
                extension: "jpg"
              }
            ],
            prices: [{ type: "printPrice", price: 3.99 }],
            thumbnail: "",
            title: "",
            urls: ["", ""],
            offset: 0
          }
        ]
      }
    };
    const expected = [
      {
        characters: [undefined, undefined, undefined],
        description: "",
        images: "http://i.annihil.us/u/prod/marvel/i/mg/b/b0/5aea30d90ef12.jpg",
        prices: "3.99",
        thumbnail: "undefined.undefined",
        title: "",
        urls: ["", ""]
      },
      {
        characters: [undefined, undefined, undefined],
        description: "",
        images: "http://i.annihil.us/u/prod/marvel/i/mg/b/b0/5aea30d90ef12.jpg",
        prices: "3.99",
        thumbnail: "undefined.undefined",
        title: "",
        urls: ["", ""]
      }
    ];

    const thunk = fetchComics();

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
    await expect(cleanComicData(mockData)).toEqual(expected);
    await cleanComicData(mockData);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });
});
