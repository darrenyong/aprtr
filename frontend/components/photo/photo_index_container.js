import React from "react";
import { connect } from "react-redux";
import PhotoIndex from "./photo_index";
import { fetchAllPhotos } from "../../actions/photo"

const mSP = (state) => {
  return ({
    photos: Object.values(state.entities.photos)
  })
}

const mDP = (dispatch) => {
  return ({
    fetchAllPhotos: () => dispatch(fetchAllPhotos())
  })
}

export default connect(mSP, mDP)(PhotoIndex);
