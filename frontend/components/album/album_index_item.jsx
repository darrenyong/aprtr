import React from 'react';
import { Link } from "react-router-dom";

export default function AlbumIndexItem(props) {
  return (
    <Link className="photoIndexItem-parent" to={`/albums/${props.album.id}`}>{props.album.title}</Link>
  );
}