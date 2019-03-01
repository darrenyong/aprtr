import React from "react";
import { Link } from "react-router-dom";
import ErrorContainer from "../errors/error_container";

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      email: "",
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
    this.props.createUser(this.state)
  }

  loginDemoUser(e) {
    e.preventDefault();
    const demoUser = {
      username: "darrenyong",
      password: "password"
    }
    this.props.createSession(demoUser)
  }

  render() {
    return(
      <>
        <div className="signup-image"></div>


        <div className="error-parent">
          <div className="error-list-container">
            <ErrorContainer />
          </div>
        </div>

        <div className="signup-parent">
          <div className="signup-form">
            <h2>Sign up</h2>
            <button onClick={this.loginDemoUser}>Demo User</button>
            <form>
              <label>
                <input
                  type="text"
                  onChange={this.update("username")}
                  value={this.state.username}
                  placeholder="Username"
                />
              </label>
              <br />
              <label>
                <input
                  type="text"
                  onChange={this.update("email")}
                  value={this.state.email}
                  placeholder="Email"
                />
              </label>
              <br />
              <label>
                <input
                  type="password"
                  onChange={this.update("password")}
                  value={this.state.password}
                  placeholder="Password"
                />
              </label>
              <br />
              <button onClick={this.handleSubmit}>Sign Up</button>
            </form>
            <div className="signup-login">
              <p> Already have an account? <Link className="signup-login-link" to="/login">Log in.</Link> </p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Signup;
