const comics = (state = [], action) => {
  switch (action.type) {
    case 'COMICS_FETCH_DATA_SUCCESS':
      return [...action.comic];
    default:
      return state;
  }
};

export default comics;
