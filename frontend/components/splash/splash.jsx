import React from "react";
import { Link } from "react-router-dom";

class Splash extends React.Component {
  render() {
    document.title = "Home | Aprtr"
    return(
      <>
      <div className="splash-image"></div>

      <div className="splash-text-parent">
        <div className="splash-text" >
          <h1 className="splash-motto">
            Find your inspiration.
          </h1>
          <h3 className="splash-body">
            Join the Aprtr community, home to tens of billions
            of photos and 2 million groups.
          </h3>
          <div className="splash-btn">
            <Link className="splash-signup-btn" to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default Splash;
