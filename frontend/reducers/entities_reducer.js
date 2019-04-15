import { combineReducers } from 'redux';
import photosReducer from "./photo";
import albumsReducer from "./album"
import usersReducer from "./user"

export default combineReducers({
  photos: photosReducer,
  albums: albumsReducer,
  users: usersReducer
})