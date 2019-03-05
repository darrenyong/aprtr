import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { fetchPhoto, deletePhoto } from '../../actions/photo';

const mSP = (state, ownProps) => {
  let photoId = ownProps.match.params.id
  return ({
    photoId: photoId,
    photo: state.entities.photos[photoId]
  })
}

const mDP = (dispatch) => {
  return ({
    fetchPhoto: (id) => dispatch(fetchPhoto(id)),
    deletePhoto: (photo) => dispatch(deletePhoto(photo))
  })
}

export default connect(mSP, mDP)(PhotoShow);
