import md5 from "crypto-js/md5";
import { cleanComicData } from "../utils/DataCleaners";
import { isLoading, hasErrored, comicFetchDataSuccess } from "../actions";

export const fetchComics = () => {
  return async dispatch => {
    try {
      dispatch(isLoading(true));
      const url = `https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&dateRange=2018-01-11%2C%202018-05-11&apikey=${PUBLIC_KEY}`;
      const response = await fetch(url);
      const result = await response.json();
      const cleanedComics = await cleanComicData(result);
      dispatch(isLoading(false));
      dispatch(comicFetchDataSuccess(cleanedComics));
    } catch {
      dispatch(isLoading(false));
      dispatch(hasErrored(true));
    }
  };
};
