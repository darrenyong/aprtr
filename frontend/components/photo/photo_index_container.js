import React from "react";
import { connect } from "react-redux";
import PhotoIndex from "./photo_index";
import { fetchAllPhotos, createPhoto, updatePhoto, fetchPhoto } from "../../actions/photo"

const mSP = (state) => {
  return ({
    photos: Object.values(state.entities.photos)
  })
}

const mDP = (dispatch) => {
  return ({
    fetchAllPhotos: () => dispatch(fetchAllPhotos()),
    createPhoto: (photo) => dispatch(createPhoto(photo)),
    updatePhoto: (photo) => dispatch(updatePhoto(photo)),
    fetchPhoto: (id) => dispatch(fetchPhoto(id))
  })
}

export default connect(mSP, mDP)(PhotoIndex);
