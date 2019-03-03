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
    let photo = this.props.photos
    return (
      <>
        <div classname="photoIndexParent">
          <h1>Explore</h1>
          <div className="photoIndex">
            <PhotoIndexItem className="photoIndexItem" photo={photo} />
          </div>
        </div>
      </>
    );
  }
}

export default PhotoIndex