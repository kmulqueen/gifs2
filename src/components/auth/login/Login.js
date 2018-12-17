import React, { Component } from "react";
import { connect } from "react-redux";
import { logIn } from "../../../store/actions/authActions";


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


          <div className="Login col-5">
            <h2> Create New User</h2>
            <form onSubmit={this.onSubmit}>
              <div className="row">
                <div className="col-12 login-e">
                  {/* <label className="col-4">Email</label> */}
                  <input className="col-8"
                  placeholder="Email"
                    type="email"
                    data-test="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>
                <div className="col-12 login-e">
                  {/* <label className="col-4">Password</label> */}
                  <input className="col-8"
                    placeholder="Password"
                    type="password"
                    data-test="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>
                <div className="col-12">
                <button type="submit" value="Log In" data-test="submit">Create New User</button>
                </div>
                <div className="col-12">
                <a href="#">Already have a login?</a>
                </div>
              
              </div>

              
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
