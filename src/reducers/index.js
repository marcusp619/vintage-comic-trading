import { combineReducers } from "redux";
import {
  isLoading,
  hasErrored,
  comics,
  character,
  userSignedIn
} from "./comics-reducers";

const rootReducer = combineReducers({
  comics,
  isLoading,
  hasErrored,
  user: userSignedIn,
  character
});

export default rootReducer;
