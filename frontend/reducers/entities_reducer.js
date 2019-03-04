import { combineReducers } from 'redux';
import photosReducer from "./photo";
import usersReducer from "./user"

export default combineReducers({
  photos: photosReducer,
  users: usersReducer
})