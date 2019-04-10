import React from 'react';
import JustifiedGrid from 'react-justified-grid';

class MyImageGallery extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <JustifiedGrid
        images={this.props.images}
        rows={10}
        maxRowHeight={300} 
        gutter={2}
        showIncompleteRow={true} />
    )
  }
}

export default MyImageGallery;