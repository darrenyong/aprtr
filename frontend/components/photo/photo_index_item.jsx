import React from 'react';

export default function PhotoIndex(props) {
  let photo;
  if (props.photo) {
    photo = Object.values(props.photo).map( (photo) => {
      return (
        <img src={photo.picture_url}></img>
      )
    })
  };
 
  return (
    <div>
      {photo}    
    </div>
    
  );
}
