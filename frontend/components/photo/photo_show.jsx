import React from 'react';

class PhotoShow extends React.Component {
  componentDidMount() {
    let photoId = this.props.photoId
    this.props.fetchPhoto(photoId)
  }

  render() {
    let photo;
    if (this.props.photo) {
      photo = this.props.photo.photo_url
    }

    return (
      <div>
        <img src={`${photo}`} />
      </div>
    );
  }
}

export default PhotoShow;