import React from "react";
import PlayerSummary from "./PlayerSummary";

const PlayerList = ({ players }) => {
  return (
    <div className="container">
      {players &&
        players.map(player => {
          return <PlayerSummary player={player} key={player.id} />;
        })}
    </div>
  );
};

export default PlayerList;