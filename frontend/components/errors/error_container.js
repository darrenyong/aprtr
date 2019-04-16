import { connect } from "react-redux";
import { createSession, clearSessionErrors } from "../../actions/session_actions";
import Error from "./error";

const mSP = (state) => {
  return({
    sessionErrors: state.errors.sessionErrors
  })
}

const mDP = (dispatch) => {
  return({
    clearSessionErrors: () => dispatch(clearSessionErrors())
  })
}

export default connect(mSP, mDP)(Error);
