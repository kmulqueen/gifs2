import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  dismissError = () => this.setState({ error: "" });

  onSubmit = evt => {
    evt.preventDefault();

    if (!this.state.email) {
      return this.setState({ error: "Email is required" });
    }

    if (!this.state.password) {
      return this.setState({ error: "Password is required" });
    }

    // Log In with Firebase

    // Clear any errors
    return this.setState({ error: "" });
  };

  onChange = evt => this.setState({ [evt.target.name]: evt.target.value });

  render() {
    return (
      <div className="container">
        <div className="row login-row col-12">
          <div className="col-12">
            <h1>Log In</h1>
          </div>

          <div className="Login col-12">
            <form onSubmit={this.onSubmit}>
              {this.state.error && (
                <h3 data-test="error" onClick={this.dismissError}>
                  <button onClick={this.dismissError}>✖</button>
                  {this.state.error}
                </h3>
              )}
              <div className="col-12">
                <label>Email</label>
                <input
                  type="email"
                  data-test="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="col-12">
                <label>Password</label>
                <input
                  type="password"
                  data-test="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <input type="submit" value="Log In" data-test="submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
