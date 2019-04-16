import { connect } from "react-redux";
import { createUser, createSession, clearSessionErrors } from "../../actions/session_actions";
import Signup from "./signup";

const mDP = (dispatch) => {
  return({
    createUser: (user) => dispatch(createUser(user)),
    createSession: (user) => dispatch(createSession(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  })
}

export default connect(null, mDP)(Signup);
