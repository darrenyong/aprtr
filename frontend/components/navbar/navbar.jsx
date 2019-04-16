import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
    this.testAlbum = this.testAlbum.bind(this)
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(() => this.props.history.push("/"));
    
  }

  testAlbum(e) {
    e.preventDefault();
    let testData = {
      album: {
        title: "Test",
        description: "test"
      }
    }
    this.props.createAlbum(testData).then( (res) => console.log(res) )
  }

  render () {
  let display;
  console.log(this.props);

  if (this.props.currentUserId && this.props.isUploadPath === false) {
    display = (
    <header className="navbar-logged-in">
      <Link className="navbar-logo" to="/">aprtr</Link>
      <div className="navbar-logged-in-btn">
        {/* <Link to={`/users/${this.props.currentUserId}/photos`}><i className="far fa-user-circle"></i></Link> */}
        <button onClick={this.testAlbum}>Test</button>
        <Link to="/photos/upload"><i className="fas fa-cloud-upload-alt"></i></Link>
        <button className="navbar-logout" onClick={this.handleLogout}>Log Out</button>
      </div>
    </header>
    );
  } else if (this.props.isAuthPath === true) {
    display =  (
    <header className="navbar">
      <Link className="navbar-logo" to="/">aprtr</Link>
    </header>
    )
  } else if (this.props.currentUserId && this.props.isUploadPath === true) {
    display = (
    <header className="navbar-logged-in">
      <Link className="navbar-logo" to="/">aprtr</Link>
      <div className="navbarUpload-logged-in-btn">
        {/* <i className="far fa-user-circle"></i> */}
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