import React from 'react';
import { Link } from 'react-router-dom';
import AlbumIndexItem from './album_index_item'

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);

    this.position = null;

  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchAlbums(this.props.match.params.id);
    }
  }

  componentDidMount() {
    this.props.fetchAlbums(this.props.userId)
  }

  render() {
    let display, albums, username, title;

    if (this.props.user) {
      username = this.props.user.username
    }

    albums = this.props.albums.map((album) => {
      return (
        <AlbumIndexItem key={album.id} album={album} />
      )
    })

    document.title = `${username} | Aprtr`
    if (this.props.albumCount == 1) {
      title = "Allbum"
    } else {
      title = "Albums"
    }
    display = (
      <div className="photoIndex-parent">
        <div className="userIndex-header">
          <h1>{username}</h1>
          <h3>{this.props.albumCount} {title}</h3>
        </div>
        <div className="userIndex-bar">
          <Link className="userIndex-photos" to={`/users/${this.props.match.params.id}/photos`}>Photos</Link>
          <Link className="userIndex-albums selected-shadow" to={`/users/${this.props.match.params.id}/albums`}>Albums</Link>
        </div>
        <div className="photoIndex-container">
          <p>Albums</p>
          <div className="photoIndex">
            <ul>
              {albums}
            </ul>
          </div>
        </div>
      </div>
    )

    return (
      <>
        {display}
      </>
    );
  }
}

export default AlbumIndex