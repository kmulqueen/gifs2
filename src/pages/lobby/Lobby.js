import React, { Component } from "react";
import PlayerList from "./PlayerList";
import { connect } from "react-redux";

class Lobby extends Component {
  render() {
    const { lobbyPlayers } = this.props;
    console.log(lobbyPlayers);
    return (
      <div className="container">
        <h5>Lobby Page</h5>
        <PlayerList players={lobbyPlayers} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    lobbyPlayers: state.lobby.lobby
  };
};

export default connect(mapStateToProps)(Lobby);
