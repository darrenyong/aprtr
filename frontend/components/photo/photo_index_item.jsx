import React from 'react';

export default function PhotoIndex(props) {
  let photo;
  if (props.photo[1]) {
    photo = props.photo[1].picture_url
  }
  console.log(props.photo[1])
  return (
    <img src={photo}></img>
  );
}
