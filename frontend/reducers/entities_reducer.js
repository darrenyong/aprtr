import { combineReducers } from 'redux';
import photosReducer from "./photo"

export default combineReducers({
  photos: photosReducer
})