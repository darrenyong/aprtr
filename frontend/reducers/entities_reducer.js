import { combineReducers } from 'redux';
import photosReducer from "./photos_reducer";
import albumsReducer from "./albums_reducer"
import usersReducer from "./users_reducer"

export default combineReducers({
  photos: photosReducer,
  albums: albumsReducer,
  users: usersReducer
})