import React from "react";
import { Switch, Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../utils/route_utils";

// Containers
import SplashContainer from "./splash/splash_container";
import SignupContainer from "./session/signup_container";
import LoginContainer from "./session/login_container";
import NavBarContainer from "./navbar/navbar_container";
import FooterContainer from "./footer/footer"



export default () => (
  <div>
    {/* Nav bar & Footer */}
    <Route path="/" component={NavBarContainer} />
    <Route path="/" component={FooterContainer} />


    <Switch>
      {/* Sign Up & Log In */}
      <AuthRoute path="/signup" component={SignupContainer} />
      <AuthRoute path="/login" component={LoginContainer} />

      {/* Splash Page */}
      <AuthRoute path="/" component={SplashContainer} />
    </Switch>

  </div>
)
