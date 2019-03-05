import React from "react";
import { Link } from "react-router-dom";

export default(props) => {
  let display;

  if (props.currentUserId && !props.isUploadPath) {
    display = (
    <header className="navbar-logged-in">
      <Link className="navbar-logo" to="/">aprtr</Link>
      <div className="navbar-logged-in-btn">
        <Link to="/photos/upload"><i className="fas fa-cloud-upload-alt"></i></Link>
        <button className="navbar-logout" onClick={props.logout}>Log Out</button>
      </div>
    </header>
    );
  } else if (props.isAuthPath === true) {
    display =  (
    <header className="navbar">
      <Link className="navbar-logo" to="/">aprtr</Link>
      {display}
    </header>
    )
  } else if (props.currentUserId && props.isUploadPath) {
    display = (
    <header className="navbar-logged-in">
      <Link className="navbar-logo" to="/">aprtr</Link>
      <div className="navbar-logged-in-btn">
        <button className="navbar-logout" onClick={props.logout}>Log Out</button>
      </div>
    </header>
    ) 
  } else {
    display = (
    <header className="navbar">
      <Link className="navbar-logo" to="/">aprtr</Link>
      <div className="navbar-btn">
        <Link className="login-btn" to="/login">Log In</Link>
        <Link className="signup-btn" to="/signup">Sign Up</Link>
      </div>
    </header>
    )
  };

  return (
    <>
      {display}
    </>
  )
}
