import React from "react";
import { Link } from "react-router-dom";

export default(props) => {
  let display;

  if (props.sessionErrors) {
    display = props.sessionErrors.map( (error) =>
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
