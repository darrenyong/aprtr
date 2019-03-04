import { connect } from "react-redux";
import PhotoForm from "./photo_upload";
import { createPhoto } from "../../actions/photo"

const mSP = (state) => {
  return ({
    photo: {title: "", body: ""}
  })
}

const mDP = (dispatch) => {
  return ({
    createPhoto: (photo) => dispatch(createPhoto(photo))
  })
}

export default connect(mSP, mDP)(PhotoForm);