import React from "react";
import { connect } from "react-redux";
import { logOut } from "../../store/actions/authActions";

const LogOut = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <button onClick={props.logOut} className="navbar-brand">
        Log Out
      </button>
    </nav>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LogOut);
