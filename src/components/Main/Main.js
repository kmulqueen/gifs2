import React from "react";

const Main = props => {
  return (
    <div className="container">
      <div className="row col-12">
        <div className="col-4 user-choice">
          <img src={props.submission} alt={props.submission} />
        </div>
      </div>
    </div>
  );
};

export default Main;
