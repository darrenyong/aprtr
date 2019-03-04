import React from 'react';
import { Link } from "react-router-dom";

export default function PhotoIndexItem(props) {
  return (
    <img className="photoIndexItem" src={`${props.photo.picture_url}`}>
      {/* <Link to=`{$}` */}
    </img>
  );
}
