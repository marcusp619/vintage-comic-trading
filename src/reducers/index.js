import { combineReducers } from "redux";
import {
  isLoading,
  hasErrored,
  comics,
  character,
  user
} from "./comics-reducers";

const rootReducer = combineReducers({
  comics,
  isLoading,
  hasErrored,
  user,
  character
});

export default rootReducer;
