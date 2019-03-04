import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../utils/route_utils";

// Containers
import SplashContainer from "./splash/splash_container";
import SignupContainer from "./session/signup_container";
import LoginContainer from "./session/login_container";
import NavBarContainer from "./navbar/navbar_container";
import FooterContainer from "./footer/footer"
import PhotoIndex from "./photo/photo_index_container"
import PhotoShowContainer from "./photo/photo_show_container"

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let currentUser = this.props.store.getState().session.currentUser;

    return (
      <div>
        {/* Nav bar & Footer */}
        <Route path="/" component={NavBarContainer} />


        <Switch>
          <Route exact path="/photos/:id" component={PhotoShowContainer} />

          {/* Sign Up & Log In */}
          <AuthRoute path="/signup" component={SignupContainer} />
          <AuthRoute path="/login" component={LoginContainer} />
          {/* Splash Page */}
          {currentUser ? <Route exact path="/" component={PhotoIndex} /> : <Route exact path="/" component={SplashContainer} />}
          
          
          {/* Redirect */}
          <Redirect to="/" />
        </Switch>

        <Route path="/" component={FooterContainer} />
      </div>
    )
  }
}
  