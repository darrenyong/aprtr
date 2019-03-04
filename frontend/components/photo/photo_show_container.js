import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { fetchPhoto } from '../../actions/photo';

const mSP = (state, ownProps) => {
  let photoId = ownProps.match.params.id
  // console.log(state)
  return ({
    photoId: photoId,
    photo: state.entities.photos[photoId]
  })
}

const mDP = (dispatch) => {
  return ({
    fetchPhoto: (id) => dispatch(fetchPhoto(id))
  })
}

export default connect(mSP, mDP)(PhotoShow);