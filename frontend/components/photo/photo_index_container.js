import { connect } from "react-redux";
import PhotoIndex from "./photo_index";
import { fetchAllPhotos } from "../../actions/photo_actions"

const mSP = (state, ownProps) => {
  return ({
    containerType: "photoIndex",
    photos: Object.values(state.entities.photos)
  })
}

const mDP = (dispatch) => {
  return ({
    action: () => dispatch(fetchAllPhotos())
  })
}

export default connect(mSP, mDP)(PhotoIndex);
