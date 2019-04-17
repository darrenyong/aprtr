import React from 'react';
import { Link } from 'react-router-dom';

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);

    this.position = null;

  }

  componentDidMount() {
    this.props.fetchAlbums(this.props.userId)
  }

  render() {
    console.log(this.props);
    let display, username;

    if (this.props.user) {
      username = this.props.user.username
    }

    document.title = `${username} | Aprtr`
    display = (
      <div className="photoIndex-parent">
        <div className="userIndex-header">
          <h1>{username}</h1>
          <h3>{this.props.albumCount} Albums</h3>
        </div>
        <div className="userIndex-bar">
          <Link className="userIndex-photos" to={`/users/${this.props.match.params.id}/photos`}>Photos</Link>
          <Link className="userIndex-albums selected-shadow" to={`/users/${this.props.match.params.id}/albums`}>Albums</Link>
        </div>
        <div className="photoIndex-container">
          <p>Albums</p>
          <div className="photoIndex">

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