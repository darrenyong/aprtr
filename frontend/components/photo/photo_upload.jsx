import React from 'react';
import { Link } from "react-router-dom";

class PhotoForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      description: "",
      picture: null,
      uploadState: 0,
      photoUrl: null
    }

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value
      })
    }
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader;
    fileReader.onloadend = () => {   
      this.setState({
        picture: file,
        photoUrl: fileReader.result,
        uploadState: 1
      })
    }
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo[title]", this.state.title);
    formData.append("photo[description]", this.state.description);
    formData.append("photo[picture]", this.state.picture);
    this.props.action(formData);
    this.props.history.push("/");
  }

  render() {
    // Checks to see which part of the upload stage the user is at
    let uploadPage = this.state.uploadState
    const preview = this.state.photoUrl ? <img className="upload2-preview" src={this.state.photoUrl} /> : null;

    // State that is rendered when the user is on the first upload stage
    let uploadState0 = (
    <div className="upload1-parent">
      <div className="upload1-form">
        <div className="upload1-text">
          <p>Drag & drop photos here</p>
        </div>
        <div className="upload1-form">
          <label className="upload1-btn" htmlFor="upload1-photo">Choose a photo to upload</label>
          <input
            name="upload1-photo"
            id="upload1-photo"
            type="file"
            onChange={this.handleFile}
          />
        </div>
      </div>
      <br />

    </div>
    )

    // State that is rendered when the user is on the second upload stage
    let uploadState1 = (
      <div className="upload2-parent">
        <form className="upload2-form" onSubmit={this.handleSubmit}>
          <div className="upload2-form-title">
            Upload Photo:
          </div>
          <div className="upload2-form-input">
            <input
              className="test"
              type="text"
              value={this.state.title}
              onChange={this.update("title")}
              placeholder="Add a title"
              />
            <br />
            <input
              type="text"
              value={this.state.description}
              onChange={this.update("description")}
              placeholder="Add a description"
              />
            <br />
          </div>
          
          <button className="upload2-btn">Upload</button>
        </form>


        {preview}
      </div>
    )


    if (uploadPage === 0) {
      return (uploadState0)
    } else if (uploadPage === 1) {
      return (uploadState1)
    }
  }
}

export default PhotoForm;