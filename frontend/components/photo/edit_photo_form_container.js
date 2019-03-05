import React from 'react';
import { connect } from 'react-redux';
import { fetchPost, updatePost } from '../../actions/photo';

const mSP = (state) => {
  return ({
    photo: this.state.photo
  })
}

const mDP = (dispatch) => {
  return ({

  })
}

export class EditPhotoForm extends React.Component {
  // componentDidMount() {
  //   this.props.fetchPost(this.props.match.)
  // }
  render() {
    console.log()
    return (
      <>
      <h1> TEST </h1>
      <form>
         <input
            type = "text"
            placeholder = "Add a title"
          />
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          {/* <input
         type = "text"
         value = {
           this.state.description
         }
         onChange = {
           this.update("description")
         }
         placeholder = "Add a description" / */}


      </form>
      </>
    )
  }
}



export default connect(mSP, mDP)(EditPhotoForm)