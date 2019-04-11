import React from 'react';
import JustifiedGrid from '../react-justified-grid';

class MyImageGallery extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // console.log(this.props.images)
    return (
      <JustifiedGrid
        images={this.props.images}
        rows={10}
        maxRowHeight={300} 
        gutter={3}
        showIncompleteRow={true} />
    )
  }
}

export default MyImageGallery;