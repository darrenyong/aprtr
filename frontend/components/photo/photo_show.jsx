import React from 'react';

class PhotoShow extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchPhoto(this.props.match.params.id);
    }
  }

  componentDidMount() {
    let photoId = this.props.photoId
    this.props.fetchPhoto(photoId)
  }

  render() {
    let photo;
    if (this.props.photo) {
      photo = this.props.photo.photoUrl
    }

    return (
      <div>
        <img src={`${photo}`} />
      </div>
    );
  }
}

export default PhotoShow;