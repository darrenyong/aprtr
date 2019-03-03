import { combineReducers } from 'redux';
import photosReducer from "./photos"

export default combineReducers({
  photos: photosReducer
})
