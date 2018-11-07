export const comics = (state = [], action) => {
  switch (action.type) {
    case "COMICS_FETCH_DATA_SUCCESS":
      return action.comic;
    default:
      return state;
  }
};

export const isLoading = (state = false, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return action.isLoading;
    default:
      return state;
  }
};

export const hasErrored = (state = false, action) => {
  switch (action.type) {
    case "HAS_ERRORED":
      return action.hasErrored;
    default:
      return state;
  }
};

export const user = (state = "", action) => {
  switch (action.type) {
    case "USER_SIGNED_IN":
      return { name: action.user, comics: [] };
    case "ADD_COMIC_TO_USER":
      return {
        name: state.name,
        comics: [action.comic, ...state.comics]
      };
    default:
      return state;
  }
};
