export const isLoading = bool => ({
  type: 'IS_LOADING',
  isLoading: bool,
});

export const hasErrored = bool => ({
  type: 'HAS_ERRORED',
  hasErrored: bool,
});

export const comicFetchDataSuccess = comics => ({
  type: 'COMICS_FETCH_DATA_SUCCESS',
  comics,
});

export const addComicToUser = comic => ({
  type: 'ADD_COMIC_TO_USER',
  comic,
});

export const userSigednIn = user => ({
  type: 'USER_SIGNED_IN',
  user,
});

export const userSignedOut = user => ({
  type: 'USER_SIGNED_OUT',
  user,
});
