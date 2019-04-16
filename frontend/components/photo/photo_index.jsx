import React from 'react';
import PhotoIndexItem from './photo_index_item';
import MyImageGallery from './justified_photo_index';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);

    this.position = null;

    this.state = {
      userIndexType: "Photo"
    }

    this.changeToAlbum = this.changeToAlbum.bind(this);
    this.changeToPhoto = this.changeToPhoto.bind(this);
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
    if (this.props.containerType === "photoIndex") {
      this.props.action()
    } else if (this.props.containerType === "userIndex") {
      this.props.action(this.props.userId)
    }
  }

  changeToAlbum() {
    this.setState({
      userIndexType: "Album"
    })
  }

  changeToPhoto() {
    this.setState({
      userIndexType: "Photo"
    })
  }

  render() {
    let photos, display, subDisplay, username;
    photos = this.props.photos.map( (photo) => {
      return (
        <PhotoIndexItem key={photo.id} photo={photo} />
      )
    })

    if (this.props.user) {
      username = this.props.user.username
    }

    if (this.state.userIndexType === "Photo") {
      subDisplay = (
        <div className="photoIndex-container">
          <p>Photos</p>
          <div className="photoIndex">
            <ul>
              <MyImageGallery className="photoIndex-gallery" images={this.props.photos} />
            </ul>
          </div>
        </div>
      )
    } else {
      subDisplay = "This is where Albums will go"
    }

    if (this.props.containerType === "photoIndex") {
      document.title = "Explore | Aprtr"
      display = (
        <div className="photoIndex-parent">
          <div className="photoIndex-bar">
            <span className="photoIndex-explore">Explore</span>
            <span className="photoIndex-trending">Trending</span>
          </div>
          <div className="photoIndex-container">
            <h1>Explore</h1>
            <div className="photoIndex">
              <MyImageGallery className="photoIndex-gallery" images={this.props.photos}/>
            </div>
          </div>
        </div>
      )
    } else {
      document.title = `${username} | Aprtr`
      display = (
        <div className="photoIndex-parent">
          <div className="userIndex-header">
            <h1>{username}</h1>
            <h3>{this.props.photoCount} Photos</h3>
          </div>
            <div className="userIndex-bar">
              <span onClick={this.changeToPhoto}>Photos</span>
              <span onClick={this.changeToAlbum}>Albums</span>
            </div>
            {subDisplay}
        </div>
      )
    }

    return (
      <>
        {display}
      </>
    );
  }
}

export default PhotoIndex