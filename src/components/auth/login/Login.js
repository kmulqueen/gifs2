import React, { Component } from "react";
import { connect } from "react-redux";
import { logIn } from "../../../store/actions/authActions";
import "./Login.css";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  onSubmit = evt => {
    evt.preventDefault();

    // Log In with Firebase
    this.props.logIn(this.state);
  };

  onChange = evt => this.setState({ [evt.target.name]: evt.target.value });

  render() {
    const { authError } = this.props;
    return (
      <div className="container">
        <div className="row login-row col-12">
          <div className="col-12">
            <h1>Log In</h1>
          </div>

          <div className="Login col-12">
            <form onSubmit={this.onSubmit}>
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
              {/* Check for Login Errors */}
              {authError ? (
                <div className="alert alert-danger" role="alert">
                  {authError}
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: creds => dispatch(logIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
