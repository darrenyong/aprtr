import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session"

export default(oldState = null, action) => {
  Object.freeze(oldState)

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return action.user.id
    case LOGOUT_CURRENT_USER:
      return null;
    default:
      return oldState;
  }
}
