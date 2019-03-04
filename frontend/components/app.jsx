import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthRoute, ProtectedRoute, SplashRoute } from "../utils/route_utils";

// Containers
import SplashContainer from "./splash/splash_container";
import SignupContainer from "./session/signup_container";
import LoginContainer from "./session/login_container";
import NavBarContainer from "./navbar/navbar_container";
import FooterContainer from "./footer/footer"
import PhotoIndexContainer from "./photo/photo_index_container"
import PhotoShowContainer from "./photo/photo_show_container"
import PhotoUploadContainer from "./photo/photo_upload"

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* Nav bar & Footer */}
        <Route path="/" component={NavBarContainer} />
        <Route path="/" component={FooterContainer} />

        <Switch>
          {/* Sign Up & Log In */}
          <AuthRoute path="/signup" component={SignupContainer} />
          <AuthRoute path="/login" component={LoginContainer} />

          {/* Photos */}
          <ProtectedRoute exact path="/photos/upload" component={PhotoUploadContainer} />
          <ProtectedRoute exact path="/photos/:id" component={PhotoShowContainer} />

          {/* Splash Page */}
          <SplashRoute exact path="/" loggedInComponent={PhotoIndexContainer} loggedOutComponent={SplashContainer}/>

          {/* Redirect */}
          <Redirect to="/" />
        </Switch>
      </div>
    )
  }
}
  