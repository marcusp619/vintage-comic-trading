import md5 from "crypto-js/md5";
import { cleanComicData } from "../utils/DataCleaners";
import {
  isLoading,
  hasErrored,
  comicFetchDataSuccess,
  characterFetchDataSuccess
} from "../actions";
const PRIV_KEY = "05198a9099469d502c9138bd02417830becd2e8f";
const PUBLIC_KEY = "95d642f0dfe4844b8d9078f4e359a1af";

export const fetchCharacterData = () => {
  return async dispatch => {
    try {
      dispatch(isLoading(true));

      let timestamp = Date.now().toString();
      let hash = md5(`${timestamp}${PRIV_KEY}${PUBLIC_KEY}`);
      let url = `https://gateway.marvel.com:443/v1/public/characters?name=wolverine&apikey=${PUBLIC_KEY}&hash=${hash}`;
      const response = await fetch(url);
      dispatch(isLoading(false));
      const result = await response.json();
      cleanComicData(result);
      dispatch(characterFetchDataSuccess(result.data.results[0].name));
      return result.data.results[0];
    } catch {
      dispatch(isLoading(false));
      dispatch(hasErrored(true));
    }
  };
};

export const fetchComics = comicsUrlArray => {
  return dispatch => {
    dispatch(isLoading(true));
    const unresolvedPromises = comicsUrlArray.map(async comicUrl => {
      let timestamp = Date.now().toString();
      let hash = md5(`${timestamp}${PRIV_KEY}${PUBLIC_KEY}`);
      const url = `${comicUrl.resourceURI}`;
      console.log(url);
      // const response = await fetch(url);
      // const result = await response.json();
      // console.log(result);
      // return response;
    });
    // console.log(unresolvedPromises);
  };
};
