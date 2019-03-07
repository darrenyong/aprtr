import React from "react";
import { Link } from "react-router-dom";
import ErrorContainer from "../errors/error_container";

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemoUser = this.loginDemoUser.bind(this);
  }

  componentDidUpdate(){
    this.props.clearSessionErrors()
  }

  componentWillUnmount() {
    this.props.clearSessionErrors()
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createSession(this.state)
  }

  loginDemoUser(e) {
    e.preventDefault();
    const demoUser = {
      username: "demo",
      password: "password"
    }
    this.props.createSession(demoUser)
  }

  render() {
    return(
      <>
      <div className="login-image"></div>

      <div className="error-parent">
        <div className="error-list-container">
          <ErrorContainer />
        </div>
      </div>

      <div className="login-parent">
        <div className="login-form">
          <h2>Log in to Aprtr</h2>
          <button onClick={this.loginDemoUser}>Demo User</button>
          <form>
            <label>
              <input
                className="session-username"
                type="text"
                onChange={this.update("username")}
                placeholder="Username"
              />
            </label>
            <br />
            <label>
              <input
                className="session-password"
                type="password"
                placeholder="Password"
                onChange={this.update("password")}
              />
            </label>
            <br />
            <button onClick={this.handleSubmit}>Log In</button>
          </form>
          <div className="login-signup">
            <p> Not an Aprtr member? <Link className="login-signup-link" to="/signup">Sign up here.</Link> </p>
          </div>
        </div>

      </div>
      </>
    )
  }
}

export default Login;
