import React from 'react';
import { EditPhotoForm } from '../photo/edit_photo_form_container'

class PhotoShow extends React.Component {
  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchPhoto(this.props.match.params.id);
    }
  }

  componentDidMount() {
    let photoId = this.props.photoId
    this.props.fetchPhoto(photoId)
  }

  handleDelete(e) {
    this.props.deletePhoto(this.props.photo.id).then((res) => this.props.history.push("/"))
  }
  
  render() {
    console.log(this.props)
    let photo;
    let title;
    let description;
    if (this.props.photo) {
      photo = this.props.photo.photoUrl
      title = this.props.photo.title
      description = this.props.photo.description
    }

    return (
      <>
      <div className="imageShow-parent">
        {/* Need a back to explore page here */}
        <div className="imageShow-container">
          <img className="imageShow-photo" src={`${photo}`} />
          <div className="imageShow-delete">
              <i 
                className="fas fa-trash-alt"
                onClick={this.handleDelete}
              ></i>
          </div>
        </div>
      </div>

      <div className="image-details-parent">
        <div className="image-details-container">
          <h1>{title}</h1>
          <h2>{description}</h2>
          <EditPhotoForm />
        </div>
      </div>
      </>
    );
  }
}

export default PhotoShow;