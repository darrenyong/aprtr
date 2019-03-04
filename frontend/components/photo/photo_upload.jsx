import React from 'react';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      description: "",
      picture: null
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
      picture: e.currentTarget.files[0]
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
    
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title
          <input 
            type="text" 
            value={this.state.title}
            onChange={this.update("title")}
          />
        </label>
        <br/>

        <label>
          Description          
          <input 
            type="text"
            value={this.state.description}
            onChange={this.update("description")}
          />
        </label>
        <br/>

        <input 
          type="file"
          onChange={this.handleFile}
        />
        <br/>

        <button>Upload!</button>
      </form>
    )
  }
}

export default PhotoForm;