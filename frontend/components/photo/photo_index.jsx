import React from 'react';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.props.fetchAllPhotos();
  }

  render() {
    let photo = this.props.photos.entities.photos
    return (
      <div>
        <PhotoIndexItem photo={photo}/>
      </div>
    );
  }
}

export default PhotoIndex