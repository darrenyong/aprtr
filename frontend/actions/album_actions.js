import * as AlbumAPIUtil from "../utils/album_api_util"

// Constants
export const RECEIVE_USER_ALBUMS = "RECEIVE_USER_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const REMOVE_ALBUM = "REMOVE_ALBUM";

// Regular actions
const receiveUserAlbums = (albums) => ({
  type: RECEIVE_USER_ALBUMS,
  albums: albums
})

const receiveAlbum = (album) => ({
  type: RECEIVE_ALBUM,
  album: album
})

const removeAlbum = (id) => ({
  type: REMOVE_ALBUM,
  id: id
})


// Thunk actions
export const fetchAllUserAlbums = () => (dispatch) => {
  return AlbumAPIUtil.fetchAllUserAlbums()
                     .then(
                       (albums) => (dispatch(receiveUserAlbums(albums)))
                     )
}

export const fetchAlbum = (id) => (dispatch) => {
  return AlbumAPIUtil.fetchAlbum(id)
                     .then(
                       (album) => (dispatch(receiveAlbum(album)))
                     )
}

export const createAlbum = (album) => (dispatch) => {
  return AlbumAPIUtil.createAlbum(album)
                     .then(
                       (album) => (dispatch(receiveAlbum(album)))
                     )
}

export const updateAlbum = (album) => (dispatch) => {
  return AlbumAPIUtil.updateAlbum(album)
                     .then(
                       (album) => (dispatch(receiveAlbum(album)))
                     )
}

export const deleteAlbum = (id) => (dispatch) => {
  return AlbumAPIUtil.deleteAlbum(id)
                     .then(
                       (id) => (dispatch(removeAlbum(id)))
                     )
}