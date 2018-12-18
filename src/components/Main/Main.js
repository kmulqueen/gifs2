import React, { Component } from "react";
import axios from "axios";

class Main extends Component {
  state = {
    questionBank: [],
    question: ""
  };

  // Generate new question
  setQuestion = () => {
    const { questionBank } = this.state;
    // Create a random index so that each question is drawn at random
    const randomIndex = Math.floor(Math.random() * (questionBank.length + 1));
    // Set state of question to the randomly chosen question from the bank
    this.setState({
      question: questionBank[randomIndex].text
    });
    // @todo Update lobby question to blackcards.text
  };

  // Get questionBank filled when the component loads
  componentDidMount() {
    // axios GET to questions json url
    axios
      .get("https://api.myjson.com/bins/19wq0e")
      // set questionBank state to the array of black cards
      .then(res =>
        this.setState({
          questionBank: res.data.blackCards
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <button onClick={this.setQuestion}>Generate Question</button>
        <div className="row col-12">{this.state.question}</div>
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
