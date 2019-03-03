import React from 'react';
import { Link } from "react-router-dom";

export default function PhotoIndexItem(props) {
  {console.log(props.photo.picture_url) }

  return (
    <img className="photoIndexItem" src={`${props.photo.picture_url}`}>
      <Link 
    </img>
  );
}
