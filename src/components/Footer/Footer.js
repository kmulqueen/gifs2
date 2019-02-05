import React from "react";
import Search from "../Search";
import Timer from "../Timer";

const Footer = props => {
  return (
    <div className="footer">
      <div className="container">
        <div className="col-2 left-side">
          <Timer time={props.timer} stopTimer={props.stopTimer} />
          <div className="points">
            <div className="losses" />
            <div className="wins" />
          </div>
        </div>
        <div className="col-10 right-side">
          <Search
            submission={props.submission}
            search={props.search}
            onSubmit={props.handleSubmit}
            handleInput={props.handleInput}
            handleSubmit={props.handleSubmit}
            gifs={props.gifs}
            gifClick={props.gifClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
