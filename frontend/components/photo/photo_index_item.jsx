import React from 'react';
import { Link } from "react-router-dom";

export default function PhotoIndexItem(props) {
  return (
    <Link to={`/photos/${props.photo.id}`}>
      <img className="photoIndexItem" src={`${props.photo.picture_url}`}/>
    </Link>
  );
}
