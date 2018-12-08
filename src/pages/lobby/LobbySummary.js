import React from "react";

const LobbySummary = ({ lobby }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{lobby.lobbyName}</h5>
          <p className="card-text">Created By: {lobby.createdBy}</p>
          {lobby.open ? <p>Status: Open</p> : <p>Status: Closed</p>}
          {/* Eventually need to loop through players in lobby and then display them rather than the first index of every lobby */}
          <p className="card-text">Players: {lobby.players[0]}</p>
        </div>
      </div>
    </div>
  );
};

export default LobbySummary;
