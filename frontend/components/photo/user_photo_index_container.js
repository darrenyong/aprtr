import { connect } from "react-redux";
import PhotoIndex from "./photo_index";
import { fetchAllUserPhotos } from "../../actions/photo_actions"

const mSP = (state, ownProps) => {
  let photos = Object.values(state.entities.photos)
  let userId = ownProps.match.params.id
  return ({
    containerType: "userIndex",
    userId: userId,
    photos: photos,
    photoCount: photos.length,
    user: state.entities.users[userId]
  })
}

const mDP = (dispatch) => {
  return ({
    action: (id) => dispatch(fetchAllUserPhotos(id))
  })
}

export default connect(mSP, mDP)(PhotoIndex);
