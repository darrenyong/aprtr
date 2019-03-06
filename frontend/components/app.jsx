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
import PhotoUploadContainer from "./photo/create_photo_form_container"

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      // history.scrollRestoration = "manual"
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
          <Route exact path="/photos/:id" component={PhotoShowContainer} />
          <Route exact path="/photos/" component={PhotoIndexContainer} />

          {/* Splash Page */}
          <SplashRoute exact path="/" loggedInComponent={PhotoIndexContainer} loggedOutComponent={SplashContainer}/>

          {/* Redirect */}
          <Redirect to="/" />
        </Switch>
      </div>
    )
  }
}
  