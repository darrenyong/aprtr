import React from 'react';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);

    this.position = null;
  }

  // componentWillUnmount() {
  //   this.position = window.pageYOffset
  // }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.action(this.props.match.params.id);
    }
  }

  componentDidMount() {
    // window.scrollTo(0, window.pageYOffset);
    // console.log(this.props)
    if (this.props.containerType === "photoIndex") {
      this.props.action()
    } else if (this.props.containerType === "userIndex") {
      this.props.action(this.props.userId)
    }
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