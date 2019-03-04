import React from 'react';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let photoId = this.props.photoId
    this.props.fetchPhoto(photoId)
  }

  render() {
    console.log(this.props)
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