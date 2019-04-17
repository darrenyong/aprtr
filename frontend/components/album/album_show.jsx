import React from 'react';
import { Link } from 'react-router-dom';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.albumId)
  }

  render() {
    console.log(this.props)
    return (
      <>
        <div className="albumShow-parent">
          <div className="albumShow-header">
            This is where the header goes
          </div>
          <div className="albumShow-photos">
            This is where the photos go
          </div>
        </div>
      </>
    );
  }
}

export default AlbumShow;