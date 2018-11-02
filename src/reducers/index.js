import {combineReducers} from 'redux';
import comicsReducers from './comics-reducers';

const rootReducer = combineReducers({
  comics: comicsReducers,
});

export default rootReducer;
