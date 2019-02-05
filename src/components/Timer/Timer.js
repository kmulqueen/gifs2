import React from "react";

const Timer = props => {
  return (
    <div className="timer">
      TIME <br />
      {props.time}
    </div>
  );
};

export default Timer;
