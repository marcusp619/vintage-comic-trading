import {combineReducers} from 'redux';
import {isLoading, hasErrored, comics} from './comics-reducers';

const rootReducer = combineReducers({
  comics,
  isLoading,
  hasErrored,
});

export default rootReducer;
