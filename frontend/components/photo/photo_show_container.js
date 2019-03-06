import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { fetchPhoto, deletePhoto, updatePhoto } from '../../actions/photo';

const mSP = (state, ownProps) => {
  let photoId = ownProps.match.params.id
  let photo = state.entities.photos[photoId]
  return ({
    photoId: photoId,
    isUploader: photo ? (state.session === state.entities.photos[photoId].uploaderId) : false,
    photo: photo 
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
