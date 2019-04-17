import React from 'react';
import { EditPhotoForm } from '../photo/edit_photo_form_container';
import { Link } from 'react-router-dom';

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

    if (prevProps.uploaderId !== this.props.uploaderId) {
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
    let photo, title, description, display, deleteBtn, uploader, editBtn, editClass, editClass2;
    if (this.props.photo) {
      photo = this.props.photo.photoUrl;
      title = this.props.photo.title;
      description = this.props.photo.description;
    }
    document.title = `${title} | Aprtr`

    if (this.props.isUploader) {
      uploader = this.toggleEdit
      editBtn = (<i className="far fa-edit"></i>) 
      editClass = "photoDetails-container"
      editClass2 = "photoDetails-child"
    } else {
      uploader = null
      editBtn = null
      editClass = "photoDetails-container2"
      editClass2 = "photoDetails-child2"
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
          <div className={editClass}>
            {editBtn}
            <div onClick={uploader} className={editClass2}>
              <h1>{title}</h1>
              <h2>{description}</h2>
            </div>
          </div>
        </>
        );
      }

    if (this.props.isUploader === true) {
      deleteBtn = (
        <i
          className="fas fa-trash-alt"
          onClick={this.handleDelete}
        ></i>
      )
    } else {
      deleteBtn = null;
    }

    return (
      <>
      <div className="photoShow-parent">
        {/* Need a back to explore page here */}
        <div className="photoShow-explore" onClick={() => this.props.history.push("/")}> 
          <span>&#8592;</span>
          <p>Back to Explore</p>
        </div>
        <div className="photoShow-container">
          <img className="photoShow-photo" src={`${photo}`} />
          <div className="photoShow-uploaderContainer">
              <Link className="photoShow-uploader" to={`/users/${this.props.uploaderId}/photos`}>{this.props.uploader}</Link>
          </div>
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