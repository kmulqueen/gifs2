import React from "react";

const Timer = props => {
  if (props.time === 0) {
    props.stopTimer();
    return <div>Time's Up!</div>;
  } else {
    return (
      <div className="timer">
        TIME
        <br />
        {props.time}
      </div>
    );
  }
};

export default Timer;
