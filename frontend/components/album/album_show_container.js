import { connect } from "react-redux";
import AlbumShow from "./album_show";
import { fetchAlbum } from "../../actions/album_actions"

const mSP = (state, ownProps) => {
  let albumId = ownProps.match.params.id
  return ({
    albumId: albumId
  })
}

const mDP = (dispatch) => {
  return ({
    fetchAlbum: (id) => dispatch(fetchAlbum(id))
  })
}

export default connect(mSP, mDP)(AlbumShow);
