import { combineReducers } from "redux";
import postReducer from './postReducer';

combineReducers({
  post: postReducer,
})
export default combineReducers;
