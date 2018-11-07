import { combineReducers } from "redux";
import { isLoading, hasErrored, comics, user } from "./comics-reducers";

const rootReducer = combineReducers({
  comics,
  isLoading,
  hasErrored,
  user
});

export default rootReducer;
