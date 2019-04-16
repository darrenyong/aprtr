import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { fetchPhoto, deletePhoto, updatePhoto } from '../../actions/photo_actions';

const mSP = (state, ownProps) => {
  let photoId = ownProps.match.params.id
  let photo = state.entities.photos[photoId]
  let user = photo ? (state.entities.users[state.entities.photos[photoId].uploaderId]) : null
  // console.log(state.entities)
  return ({
    photoId: photoId,
    isUploader: photo ? (state.session === state.entities.photos[photoId].uploaderId) : false,
    photo: photo,
    uploader: user ? user.username : null,
    uploaderId: photo ? state.entities.photos[photoId].uploaderId : null
  })
}

const mDP = (dispatch) => {
  return ({
    fetchPhoto: (id) => dispatch(fetchPhoto(id)),
    deletePhoto: (id) => dispatch(deletePhoto(id)),
    updatePhoto: (photo) => dispatch(updatePhoto(photo))
  })
}

export default connect(mSP, mDP)(PhotoShow);
