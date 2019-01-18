import React, { Component } from "react";
import Questions from "../../components/Questions/Questions";
import axios from "axios";

class Main extends Component {
  render() {
    return (
      <div className="container">
        <Questions />

        <div className="row col-12">
          <div className="col-4 user-choice">Box</div>
          <div className="col-4 user-choice">Box</div>
          <div className="col-4 user-choice">Box</div>
          <div className="col-4 user-choice">Box</div>
          <div className="col-4 user-choice">Box</div>
          <div className="col-4 user-choice">Box</div>
        </div>
      </div>
    );
  }
}
export default Main;
