import React from "react";
import { connect } from "react-redux";
import PhotoIndex from "./photo_index";
import { fetchAllUserPhotos } from "../../actions/photo"

const mSP = (state, ownProps) => {
  console.log(ownProps)
  return ({
    containerType: "userIndex",
    userId: ownProps.match.params.id,
    photos: Object.values(state.entities.photos)
  })
}

const mDP = (dispatch) => {
  return ({
    action: (id) => dispatch(fetchAllUserPhotos(id))
  })
}

export default connect(mSP, mDP)(PhotoIndex);
