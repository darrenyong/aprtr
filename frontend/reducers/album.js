import { RECEIVE_USER_ALBUMS, RECEIVE_ALBUM, REMOVE_ALBUM } from "../actions/album"
import merge from "lodash/merge";

export default (oldState = {}, action) => {
  Object.freeze(oldState)
  let newState;

  switch(action.type) {
    case RECEIVE_USER_ALBUMS:
      return action.albums;
    case RECEIVE_ALBUM:
      newState = merge({}, oldState, { [action.album.id]: action.album });
      return newState;
    case REMOVE_ALBUM:
      newState = merge({}, oldState);
      delete newState[action.album.id];
      return newState;
    default:
      return oldState;
  }
}