import React from "react";
import LobbySummary from "./LobbySummary";

const LobbyList = ({ lobbies }) => {
  return (
    <div className="container">
      {lobbies &&
        lobbies.map(lobby => {
          return <LobbySummary lobby={lobby} key={lobby.id} />;
        })}
    </div>
  );
};

export default LobbyList;
