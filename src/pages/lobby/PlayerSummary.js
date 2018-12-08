import React from "react";

const PlayerSummary = ({ player }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{player.userName}</h5>
          <p className="card-text">{player.content}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerSummary;
