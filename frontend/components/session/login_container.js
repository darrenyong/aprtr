import { connect } from "react-redux";
import { createSession, clearSessionErrors } from "../../actions/session_actions";
import Login from "./login";

const mDP = (dispatch) => {
  return({
    createSession: (user) => dispatch(createSession(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  })
}

export default connect(null, mDP)(Login);
