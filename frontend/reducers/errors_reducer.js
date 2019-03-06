import { combineReducers } from 'redux';
import sessionErrorsReducer from "./session_errors"
import photoErrorsReducer from "./photo_errors" 

export default combineReducers({
  sessionErrors: sessionErrorsReducer,
  photoErrors: photoErrorsReducer
})
