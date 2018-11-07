import { cleanComicData } from "./DataCleaners";

describe("cleanComicData", () => {
  it("should return comic data in the expected format", async () => {
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

    const result = await cleanComicData(mockData);

    expect(result).toEqual(expected);
  });
});
