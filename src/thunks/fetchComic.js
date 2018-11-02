import md5 from 'crypto-js/md5';
import {isLoading, hasErrored, comicFetchDataSuccess} from '../actions';
const PRIV_KEY = '05198a9099469d502c9138bd02417830becd2e8f';
const PUBLIC_KEY = '95d642f0dfe4844b8d9078f4e359a1af';

export const fetchComics = () => {
  return async dispatch => {
    try {
      dispatch(isLoading(true));

      let timestamp = Date.now().toString();
      let hash = md5(`${timestamp}${PRIV_KEY}${PUBLIC_KEY}`);
      let url = `https://gateway.marvel.com:443/v1/public/characters?name=wolverine&apikey=${PUBLIC_KEY}&hash=${hash}`;

      const response = await fetch(url);
      const result = await response.json();
      dispatch(isLoading(false));
      dispatch(comicFetchDataSuccess(result.data.results));
    } catch {
      dispatch(hasErrored(true));
    }
  };
};
