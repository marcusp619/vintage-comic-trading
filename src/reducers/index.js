import { combineReducers } from "redux";
import { isLoading, hasErrored, comics, userSignedIn } from "./comics-reducers";

const rootReducer = combineReducers({
  comics,
  isLoading,
  hasErrored,
  user: userSignedIn
});

export default rootReducer;
