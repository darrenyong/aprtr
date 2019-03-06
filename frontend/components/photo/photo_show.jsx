import React from 'react';
import { EditPhotoForm } from '../photo/edit_photo_form_container'

class PhotoShow extends React.Component {
  constructor(props) {
    super(props)
   
    this.state = {
      photoEdit: false
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
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

  toggleEdit(e) {
    this.setState((oldState) => ({photoEdit: !oldState.photoEdit}))
  }
  
  render() {
    let photo, title, description, display, deleteBtn;
    if (this.props.photo) {
      photo = this.props.photo.photoUrl;
      title = this.props.photo.title;
      description = this.props.photo.description;
    }

    if (this.state.photoEdit) {
      display = (
        <EditPhotoForm 
          photo={this.props.photo} 
          updatePhoto={this.props.updatePhoto}
          toggleEdit={this.toggleEdit} 
        />
      ) } else {
        display = (
        <>
          <div className="photoDetails-container">
            <i className="far fa-edit"></i>
            <div onClick={this.toggleEdit} className="photoDetails-child">
              <h1>{title}</h1>
              <h2>{description}</h2>
            </div>
          </div>
        </>
        );
      }

    // if (this.props.currentUser === this.props.photo.uploaderId) {
      deleteBtn = (
        <i
          className="fas fa-trash-alt"
          onClick={this.handleDelete}
        ></i>
      )
    // } else {
    //   deleteBtn = null;
    // }

    return (
      <>
      <div className="photoShow-parent">
        {/* Need a back to explore page here */}
        <div className="photoShow-container">
          <img className="photoShow-photo" src={`${photo}`} />
          <div className="photoShow-delete">
            {deleteBtn}
          </div>
        </div>
      </div>

      <div className="photoDetails-parent">
          {display}
      </div>
      </>
    );
  }
}

export default PhotoShow;