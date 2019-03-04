import * as UserAPIUtil from "../utils/session_api_util"

// Constants
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS"

// Regular actions
const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user: user
})

const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors: errors
})

// Thunk actions
export const fetchUser = (id) => (dispatch) => {
  return UserAPIUtil.fetchUser(id)
  .then(
    (user) => (dispatch(receiveCurrentUser(user))),
    (error) => (dispatch(receiveUserErrors(error.responseJson)))
  );
}