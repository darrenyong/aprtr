import { RECEIVE_CURRENT_USER } from "../actions/user"
import { RECEIVE_USER_PHOTOS } from "../actions/photo"

export default (oldState = {}, action) => {
  Object.freeze(oldState)

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, {[action.user.id]: action.user})
    case RECEIVE_USER_PHOTOS:
      return Object.assign({}, oldState, {[action.users.id]: action.users})
    default:
      return oldState;
  }
}
