import React from "react";

const Questions = props => {
  return (
    <div>
      <div className="container-fluid row">
        <button
          id="question-button"
          className="question-button col-3"
          onClick={props.startRound}
        >
          New Question?
        </button>
        <div className="col-12 question">{props.question}</div>
      </div>
    </div>
  );
};

export default Questions;
