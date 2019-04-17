import React from 'react';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      description: "",
      picture: null,
      uploadState: 0,
      photoUrl: null,
      photoWidth: 0,
      photoHeight: 0
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
      let img = document.createElement("img");
      img.src = fileReader.result
      img.onload = () => {   
        this.setState({
          picture: file,
          photoUrl: fileReader.result,
          uploadState: 1,
          photoWidth: img.width,
          photoHeight: img.height
        })
      }
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
    formData.append("photo[width]", this.state.photoWidth);
    formData.append("photo[height]", this.state.photoHeight);
    this.props.action(formData).then((res) => this.props.history.push(`/photos/${res.photo.id}`));
  }

  render() {
    console.log(this.state);
    console.log(typeof this.state.photoWidth);
    document.title = "Upload | Aprtr"
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
            accept="image/jpeg, image/png"
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
            <textarea
              type="text"
              wrap="hard"
              rows="10"
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