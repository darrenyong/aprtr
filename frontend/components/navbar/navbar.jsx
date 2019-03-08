import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(() => this.props.history.push("/"));
    
  }

  render () {
  let display;

  if (this.props.currentUserId && this.props.isUploadPath === false) {
    display = (
    <header className="navbar-logged-in">
      <Link className="navbar-logo" to="/">aprtr</Link>
      <div className="navbar-logged-in-btn">
        <Link to="/photos/upload"><i className="fas fa-cloud-upload-alt"></i></Link>
        <button className="navbar-logout" onClick={this.handleLogout}>Log Out</button>
      </div>
    </header>
    );
  } else if (this.props.isAuthPath === true) {
    display =  (
    <header className="navbar">
      <Link className="navbar-logo" to="/">aprtr</Link>
      {display}
    </header>
    )
  } else if (this.props.currentUserId && this.props.isUploadPath === true) {
    display = (
    <header className="navbar-logged-in">
      <Link className="navbar-logo" to="/">aprtr</Link>
      <div className="navbarUpload-logged-in-btn">
        <button className="navbarUpload-logout" onClick={this.handleLogout}>Log Out</button>
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
}

export default NavBar;