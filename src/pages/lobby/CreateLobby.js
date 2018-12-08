import React, { Component } from "react";
import { createLobby } from "../../store/actions/lobbyActions";
import { connect } from "react-redux";

class CreateLobby extends Component {
  state = {
    lobbyName: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.createLobby(this.state);
  };

  render() {
    return (
      <div className="container">
        <h5>Create Lobby Page</h5>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="lobbyName">Lobby Name</label>
            <input
              type="text"
              name="lobbyName"
              onChange={this.onChange}
              className="form-control"
            />
            <small className="form-text text-muted">
              Enter the name of your lobby.
            </small>
          </div>
          <button type="submit" className="btn btn-primary">
            Create Lobby
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createLobby: lobby => dispatch(createLobby(lobby))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateLobby);
