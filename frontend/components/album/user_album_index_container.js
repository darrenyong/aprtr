import { connect } from "react-redux";
import AlbumIndex from "./album_index";
import { fetchAllUserAlbums } from "../../actions/album_actions"

const mSP = (state, ownProps) => {
  console.log(state);
  let albums = Object.values(state.entities.albums)
  let userId = ownProps.match.params.id
  return ({
    containerType: "userIndex",
    userId: userId,
    albums: albums,
    albumCount: albums.length,
    user: state.entities.users[userId]
  })
}

const mDP = (dispatch) => {
  return ({
    fetchAlbums: (id) => dispatch(fetchAllUserAlbums(id))
  })
}

export default connect(mSP, mDP)(AlbumIndex);
