export const cleanComicData = character => {
  const { comics, thumbnail, name, description } = character.data.results[0];

  console.log(character);
  const cleanedCard = {
    name,
    imageUrl: `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`,
    description
  };
  console.log(cleanedCard);
};
