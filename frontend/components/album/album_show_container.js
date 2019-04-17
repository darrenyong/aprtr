import { connect } from "react-redux";
import AlbumShow from "./album_show";
import { fetchAlbum } from "../../actions/album_actions"

const mSP = (state, ownProps) => {
  let albumId = ownProps.match.params.id;
  let album = state.entities.albums[albumId];
  let user = album ? (state.entities.users[state.entities.albums[albumId].userId]) : null
  return ({
    albumId: albumId,
    album: album,
    photos: Object.values(state.entities.photos),
    user: user,
    userId: album ? state.entities.albums[albumId].userId : null,
  })
}

const mDP = (dispatch) => {
  return ({
    fetchAlbum: (id) => dispatch(fetchAlbum(id))
  })
}

export default connect(mSP, mDP)(AlbumShow);
