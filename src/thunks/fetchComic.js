import md5 from "crypto-js/md5";
import { cleanComicData } from "../utils/DataCleaners";
import { isLoading, hasErrored, comicFetchDataSuccess } from "../actions";

const PRIV_KEY = "05198a9099469d502c9138bd02417830becd2e8f";
const PUBLIC_KEY = "95d642f0dfe4844b8d9078f4e359a1af";

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
