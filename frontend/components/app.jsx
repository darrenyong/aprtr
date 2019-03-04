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

        {/* Sign Up & Log In */}
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />

        {/* Splash Page */}
        <SplashRoute exact path="/" loggedInComponent={PhotoIndexContainer} loggedOutComponent={SplashContainer}/>

        <Switch>
          <Route exact path="/photos/:id" component={PhotoShowContainer} />
          {/* Redirect */}
          <Redirect to="/" />
        </Switch>
      </div>
    )
  }
}
  