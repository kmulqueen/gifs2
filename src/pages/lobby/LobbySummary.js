import React from "react";
import { joinLobby } from "../../store/actions/lobbyActions";
import { connect } from "react-redux";

const LobbySummary = ({ lobby, joinLobby }) => {
  const onClick = e => {
    e.preventDefault();
    console.log(e.target.id);
    // Push player to players array in lobby
    joinLobby(e.target.id);
  };

  const playerArray = lobby.players;
  const lobbyPlayers = playerArray.join(", ");

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{lobby.lobbyName}</h5>
          <p className="card-text">Created By: {lobby.createdBy}</p>
          {/* Figure out how to change status if x amount of players are in lobbyPlayers */}
          {lobby.open ? (
            <p>
              Status:{" "}
              <span className="text-success font-weight-bold">Open</span>
            </p>
          ) : (
            <p>
              Status:{" "}
              <span className="text-danger font-weight-bold">Closed</span>
            </p>
          )}
          {/* If there's players, then render lobbyPlayers onto DOM */}
          {lobby.players ? (
            <p className="card-text">Players: {lobbyPlayers}</p>
          ) : null}
          {/* If lobby is closed, don't render a join button */}
          {lobby.open ? (
            <a
              href="#"
              onClick={onClick}
              id={lobby.id}
              className="btn btn-primary"
            >
              Join
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const mapDispathToProps = dispatch => {
  return {
    joinLobby: lobby => dispatch(joinLobby(lobby))
  };
};

export default connect(
  null,
  mapDispathToProps
)(LobbySummary);
