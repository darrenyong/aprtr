import React from 'react';
import { EditPhotoForm } from '../photo/edit_photo_form_container'

class PhotoShow extends React.Component {
  constructor(props) {
    super(props)
   
    this.state = {
      captionEdit: false
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchPhoto(this.props.match.params.id);
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    let photoId = this.props.photoId
    this.props.fetchPhoto(photoId)
  }

  handleDelete(e) {
    this.props.deletePhoto(this.props.photo.id).then((res) => this.props.history.push("/"))
  }

  handleEdit(e) {
    this.setState({
      captionEdit: true
    })
  }
  
  render() {
    let photo, title, description, display;
    if (this.props.photo) {
      photo = this.props.photo.photoUrl
      title = this.props.photo.title
      description = this.props.photo.description
    }

    if (this.state.captionEdit) {
      display = (
        <EditPhotoForm photo={this.props.photo} updatePhoto={this.props.updatePhoto}/>
      ) } else {
        display = (
        <>
          <div onClick={this.handleEdit} className="photoDetails-child">
            <h1>{title}</h1>
            <h2>{description}</h2>
          </div>
        </>
        );
      }

    return (
      <>
      <div className="photoShow-parent">
        {/* Need a back to explore page here */}
        <div className="photoShow-container">
          <img className="photoShow-photo" src={`${photo}`} />
          <div className="photoShow-delete">
              <i 
                className="fas fa-trash-alt"
                onClick={this.handleDelete}
              ></i>
          </div>
        </div>
      </div>

      <div className="photoDetails-parent">
        <div className="photoDetails-container">
          {display}
        </div>
      </div>
      </>
    );
  }
}

export default PhotoShow;