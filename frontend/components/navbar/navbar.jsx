import React from "react";
import { Link } from "react-router-dom";

export default(props) => {
  let display;

  if (props.currentUserId) {
    display = (<div>
      <p>Hello, {props.currentUser.username}</p>
      <button onClick={props.logout}>Log Out</button>
    </div>);
  } else if (props.isAuthPath === true) {
    display = null;
  } else {
    display = (<div className="navbar-btn">
      <Link className="login-btn" to="/login">Log In</Link>
      <Link className="signup-btn" to="/signup">Sign Up</Link>
    </div>)
  };

  return (
    <header className="navbar">
      <Link className="navbar-logo" to="/">aprtr</Link>
      {display}
    </header>
  )
}
