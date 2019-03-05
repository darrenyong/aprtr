import React from 'react';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      description: "",
      picture: null,
      uploadState: 0
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
    this.setState({
      picture: e.currentTarget.files[0],
      uploadState: 1
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    // debugger
    const formData = new FormData();
    formData.append("photo[title]", this.state.title);
    formData.append("photo[description]", this.state.description);
    formData.append("photo[picture]", this.state.picture);
    this.props.action(formData);
  }

  render() {
    let uploadPage = this.state.uploadState

    if (uploadPage === 0) {
      return (
        <div className="photo-parent">
          <div className="upload1-form">
            <div className="upload-text">
              <p>Drag & drop photos here or</p>
            </div>
            <div className="upload-form">
              <label className="upload-btn" for="photo-upload">Choose a photo to upload</label>
              <input 
                name="photo-upload"
                id="photo-upload"
                type="file"
                onChange={this.handleFile}
              />
            </div>
          </div>
          <br/>
  
        </div>
      )
    } else if (uploadPage === 1) {
      return (
      <div className="photo-parent">
      </div>
      )
    }
  }
}

export default PhotoForm;