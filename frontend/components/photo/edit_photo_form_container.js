import React from 'react';
import { connect } from 'react-redux';
import { fetchPhoto, updatePhoto } from '../../actions/photo';

const mDP = (dispatch) => {
  return ({
    fetchPhoto: (photo) => dispatch(fetchPhoto(photo)),
    action: (photo) => dispatch(updatePhoto(photo))    
  })
}

export class EditPhotoForm extends React.Component {
  constructor(props) {
    super(props)

    let { id, title, description } = this.props.photo
    this.state = {
      id, title, description
    }

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value
      })
    }
  }
  
 handleSubmit(e) {
   e.preventDefault();
   this.props.updatePhoto(this.state);
   this.props.toggleEdit(e);
 }

  render() {
    return (
      <form className="photoEdit-form" onSubmit={this.handleSubmit}>
         <input
            className="photoEdit-title"
            type="text"
            placeholder = "Add title"
            value={this.state.title}
             onChange = {this.update("title")}
          />
          <br />
         <textarea
            className="photoEdit-description"
            type="text"
            placeholder = "Add description"
            value={this.state.description}
            onChange = {this.update("description")}
          />
          <br />

          <button className="photoEdit-update">Update</button>

      </form>
    )
  }
}

export default connect(null, mDP)(EditPhotoForm)