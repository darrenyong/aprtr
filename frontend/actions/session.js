import * as SessionAPIUtil from "../utils/session"

// Constants
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const REMOVE_SESSION_ERRORS = "REMOVE_SESSION_ERRORS";

// Regular actions
const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user: user
})

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: errors
})

export const clearSessionErrors = () => ({
  type: REMOVE_SESSION_ERRORS,
  errors: []
})

// Thunk actions
export const createUser = (user) => (dispatch) => {
  return SessionAPIUtil.createUser(user)
  .then(
    (user) => (dispatch(receiveCurrentUser(user))),
    (error) => (dispatch(receiveErrors(error.responseJSON))
  ));
}

export const createSession = (user) => (dispatch) => {
  return SessionAPIUtil.createSession(user)
  .then(
    (user) => (dispatch(receiveCurrentUser(user))),
    (error) => (dispatch(receiveErrors(error.responseJSON))
  ));
}

export const deleteSession = () => (dispatch) => {
  return SessionAPIUtil.deleteSession().then( (user) => dispatch(logoutCurrentUser()));
}
