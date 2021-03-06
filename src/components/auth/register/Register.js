import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../../store/actions/authActions";
// import "./Register.css";

class Register extends Component {
  state = {
    email: "",
    userName: "",
    password: ""
  };

  onSubmit = evt => {
    evt.preventDefault();

    // Create New User with Firebase
    this.props.register(this.state);
  };

  onChange = evt => this.setState({ [evt.target.name]: evt.target.value });

  render() {
    const { authError } = this.props;
    return (
      <div className="container">
        <div className="row login-row col-12">

          <div className="Login col-5">
          <h2>Register</h2>
            <form onSubmit={this.onSubmit}>
            <div className="row">
              <div className="col-12 login-e">
                {/* <label>Email</label> */}
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
                {/* <label>User Name</label> */}
                <input className="col-8"
                    placeholder="Username"
                  type="text"
                  data-test="userName"
                  name="userName"
                  value={this.state.userName}
                  onChange={this.onChange}
                />
              </div>
              <div className="col-12 login-e">
                {/* <label>Password</label> */}
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
              <button 
              type="submit" value="Sign Up" data-test="submit" >Submit</button>
              </div>
              {/* Check for Register Errors */}
              {authError ? (
                <div className="alert alert-danger" role="alert">
                  {authError}
                </div>
              ) : null}
              </div>
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
    register: newUser => dispatch(register(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
