import React from 'react';
import { Link } from "react-router-dom";

export default function PhotoIndexItem(props) {
  return (
    <Link className="photoIndexItem-parent" to={`/photos/${props.photo.id}`}>
      <img className="photoIndexItem" src={`${props.photo.photoUrl}`}/>
      {/* <div className="photoIndexItem-overlay"></div> */}
    </Link>
  );
}
