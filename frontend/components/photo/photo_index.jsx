import React from 'react';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    this.props.fetchAllPhotos();
  }

  render() {
    // console.log(this.props.photos)
    let photos = this.props.photos.map( (photo) => {
      return (
        <PhotoIndexItem key={photo.id} photo={photo} />
      )
    })
    return (
      <>
      <h1>Explore</h1>
      <div className="photoIndexParent">
        <div className="photoIndex">
        <ul>
          {photos}
        </ul>
        </div>
      </div>
      </>
    );
  }
}

export default PhotoIndex