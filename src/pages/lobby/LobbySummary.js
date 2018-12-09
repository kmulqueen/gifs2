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
          {lobby.open ? <p>Status: Open</p> : <p>Status: Closed</p>}
          {/* Eventually need to loop through players in lobby and then display them rather than the first index of every lobby */}

          {lobby.players ? (
            <p className="card-text">Players: {lobbyPlayers}</p>
          ) : null}
          <a
            href="#"
            onClick={onClick}
            id={lobby.id}
            className="btn btn-primary"
          >
            Join
          </a>
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
