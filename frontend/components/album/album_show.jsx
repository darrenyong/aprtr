import React from 'react';
import { Link } from 'react-router-dom';
import MyImageGallery from '../photo/justified_photo_index'

class AlbumShow extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchAlbum(this.props.match.params.id);
    }

    if (prevProps.userId !== this.props.userId) {
      this.props.fetchAlbum(this.props.match.params.id);
    }
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.albumId)
  }

  render() {
    console.log(this.props);
    let albumTitle, albumDescription, user, photoCount;
    if (this.props.album) {
      albumTitle = this.props.album.title;
      albumDescription = this.props.album.description;
      user = this.props.user.username;
      photoCount = this.props.photos.length
    }

    return (
      <>
        <div className="albumShow-parent">
          <div className="albumShow-header">
            <h1>{albumTitle}</h1>
            <h2>{albumDescription}</h2>
            <h2>{photoCount} photos</h2>
            Created by: {user}
          </div>
          <div className="albumShow-photos">
            <MyImageGallery className="photoIndex-gallery" images={this.props.photos} />
          </div>
        </div>
      </>
    );
  }
}

export default AlbumShow;