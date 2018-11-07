import { fetchComics } from "../fetchComic";
import { isLoading, hasErrored } from "../../actions";
import { cleanComicData } from "../../utils/DataCleaners";

describe("fetchComic", () => {
  let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn();
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
