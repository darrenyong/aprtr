import React from 'react';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllPhotos();
  }

  render() {
    let photos = this.props.photos.map( (photo) => {
      return (
        <PhotoIndexItem key={photo.id} photo={photo} />
      )
    })
    return (
      <>
      <div className="photoIndex-parent">
        <div className="photoIndex-container">
          <h1>Explore</h1>
          <div className="photoIndexParent">
            <div className="photoIndex">
            <ul>
              {photos}
            </ul>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default PhotoIndex