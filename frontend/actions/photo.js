import * as PhotoAPIUtil from "../utils/photo_api_util"

// Constants
export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const RECEIVE_USER_PHOTOS = "RECEIVE_USER_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";
export const RECEIVE_PHOTO_ERRORS = "RECEIVE_PHOTO_ERRORS";
export const REMOVE_PHOTO_ERRORS = "REMOVE_PHOTO_ERRORS";

// Regular actions
const receivePhotos = (photos) => ({
  type: RECEIVE_ALL_PHOTOS,
  photos: photos
});
const receiveUserPhotos = ({photos, users}) => ({
  type: RECEIVE_USER_PHOTOS,
  photos: photos,
  users: users
})

const receivePhoto = (photo) => ({
  type: RECEIVE_PHOTO,
  photo: photo
})

const removePhoto = (id) => ({
  type: REMOVE_PHOTO,
  id: id
})

const receivePhotoErrors = (errors) => ({
  type: RECEIVE_PHOTO_ERRORS,
  errors: errors
})

export const clearPhotoErrors = () => ({
  type: REMOVE_PHOTO_ERRORS,
  errors: []
})

// Thunk actions
export const fetchAllPhotos = () => (dispatch) => {
  return PhotoAPIUtil.fetchAllPhotos()
  .then(
    (photos) => (dispatch(receivePhotos(photos))),
    (error) => (dispatch(receivePhotoErrors(error.responseJSON)))
  );
}

export const fetchAllUserPhotos = (id) => (dispatch) => {
  return PhotoAPIUtil.fetchAllUserPhotos(id)
  .then(
    (photos) => (dispatch(receiveUserPhotos(photos))),
    (error) => (dispatch(receivePhotoErrors(error.responseJSON)))
  );
}

export const fetchPhoto = (id) => (dispatch) => {
  return PhotoAPIUtil.fetchPhoto(id)
  .then(
    (photo) => (dispatch(receivePhoto(photo))),
    (error) => (dispatch(receivePhotoErrors(error.responseJSON)))
  );
}

export const createPhoto = (photo) => (dispatch) => {
  return PhotoAPIUtil.createPhoto(photo)
  .then(
    (photo) => (dispatch(receivePhoto(photo))),
    (error) => (dispatch(receivePhotoErrors(error.responseJSON)))
  );
}

export const updatePhoto = (photo) => (dispatch) => {
  return PhotoAPIUtil.updatePhoto(photo)
  .then(
    (photo) => (dispatch(receivePhoto(photo))),
    (error) => (dispatch(receivePhotoErrors(error.responseJSON)))
  );
}

export const deletePhoto = (id) => (dispatch) => {
  return PhotoAPIUtil.deletePhoto(id)
  .then(
    (id) => (dispatch(removePhoto(id)))
  );
}