import React from 'react';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      description: "",
      photoFile: null
    }

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  update(field) {
    return ( (e) => {
      this.setState({
        [field]: e.target.value
      })
    })
  }

  handleFile(e) {
    this.setState({
      photoFile: e.currentTarget.files[0]
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPhoto(this.state)
  }

  render() {
    console.log(this.state)
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
          Body          
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