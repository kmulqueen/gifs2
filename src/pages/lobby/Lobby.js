import React, { Component } from "react";
import LobbyList from "./LobbyList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Lobby extends Component {
  render() {
    const { lobbies } = this.props;

    return (
      <div className="container">
        <h5>Lobby Page</h5>
        <LobbyList lobbies={lobbies} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    lobbies: state.firestore.ordered.lobbies
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "lobbies" }])
)(Lobby);
