import React from "react";

export default(props) => {
  let display;

  if (props.sessionErrors) {
    display = props.sessionErrors.map( (error) =>
    (
      <li>
        {error}
      </li>
    ))
  } else if (props.photoErrors) {
    display = props.photoErrors.map( (error) => 
    (
      <li>
        {error}
      </li>
    ))
  }

  return (
    <>
      <ul className="error-list">
        {display}
      </ul>
    </>
  )
}
