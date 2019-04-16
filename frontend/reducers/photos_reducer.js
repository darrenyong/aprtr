import { RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO, REMOVE_PHOTO, RECEIVE_USER_PHOTOS } from "../actions/photo_actions"
import merge from "lodash/merge";

export default (oldState = {}, action) => {
  Object.freeze(oldState)
  let newState;

  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
      return action.photos;
    case RECEIVE_USER_PHOTOS:
    if (!action.photos) {
      return {}
    } else {
      return action.photos;
    }
    case RECEIVE_PHOTO:
      newState = merge({}, oldState, { [action.photo.id]: action.photo });
      return newState;
    case REMOVE_PHOTO:
      newState = merge({}, oldState);
      delete newState[action.photoId];
      return newState;
    default:
      return oldState;
  }
}
