import { connect } from "react-redux";
import PhotoForm from "./photo_upload";
import { createPhoto } from "../../actions/photo_actions"

const mSP = (state, ownProps) => {
  return ({
    photo: {title: "", body: ""}
  })
}

const mDP = (dispatch) => {
  return ({
    action: (photo) => dispatch(createPhoto(photo))
  })
}

export default connect(mSP, mDP)(PhotoForm);