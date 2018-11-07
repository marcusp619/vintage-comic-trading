export const cleanComicData = comics => {
  const cleanedComics = comics.data.results.map(comic => {
    const {
      characters,
      description,
      images,
      prices,
      thumbnail,
      title,
      urls
    } = comic;
    const involvedCharacters = characters.items.map(character => {
      return character.name;
    });

    return {
      characters: [...involvedCharacters],
      description,
      images: `${images[0].path}.${images[0].extension}`,
      prices: `${prices[0].price}`,
      thumbnail: `${thumbnail.path}.${thumbnail.extension}`,
      title,
      urls
    };
  });
  return cleanedComics;
};
