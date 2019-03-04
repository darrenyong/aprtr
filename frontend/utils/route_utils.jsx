import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const mSP = (state) => {
  return({
    loggedIn: Boolean(state.session)
  })
}

// Routes you don't want users to see when they're logged in
const Auth = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={ (props) => (
      loggedIn ? <Redirect to="/" /> : <Component {...props} />
    )}
  />
);

// Routes you don't want users to see when they're not logged in
const Protected = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={ (props) => (
      loggedIn ? <Component {...props} /> : <Redirect to ="/" />
    )}
  />
);

// Custom ROute to show different stuff on home
const Splash = ({ loggedIn, exact, path, loggedInComponent: LoggedInComponent, loggedOutComponent: LoggedOutComponent }) => (
  <Route
    path={path}
    exact={exact}
    render={ (props) => (
      loggedIn ? <LoggedInComponent {...props} /> : <LoggedOutComponent {...props} />
    )}
  />
);

export const AuthRoute = withRouter(connect(mSP, null)(Auth));
export const ProtectedRoute = withRouter(connect(mSP, null)(Protected));
export const SplashRoute = withRouter(connect(mSP, null)(Splash));
