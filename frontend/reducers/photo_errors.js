import { RECEIVE_PHOTO_ERRORS, RECEIVE_PHOTO, REMOVE_PHOTO_ERRORS} from '../actions/photo';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PHOTO_ERRORS:
      return action.errors;
    case RECEIVE_PHOTO || REMOVE_PHOTO_ERRORS:
      return [];
    default:
      return state;
  }
}
