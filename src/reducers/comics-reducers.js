export const comics = (state = [], action) => {
  switch (action.type) {
    case "COMICS_FETCH_DATA_SUCCESS":
      return action.comic;
    default:
      return state;
  }
};

export const character = (state = "", action) => {
  switch (action.type) {
    case "CHARACTER_FETCH_DATA_SUCCESS":
      return action.character;
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

export const userSignedIn = (state = null, action) => {
  switch (action.type) {
    case "USER_SIGNED_IN":
      return { username: action.user, comics: [] };
    default:
      return state;
  }
};
