import React from 'react';

export default function PhotoIndex(props) {
  let photo;
  if (props.photo[1]) {
    photo = props.photo[1].picture_url
  }
 
  return (
    <img src={photo}></img>
  );
}
