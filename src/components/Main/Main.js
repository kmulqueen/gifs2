import React, { Component } from "react";
import Questions from "../../components/Questions/Questions";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer";

class Main extends Component {

  state = {
    questionBank: [],
    question: "",
    time: 30,
    timerIsOn: false
  };

  //   var questionButton = document.getElementById("question-button");
  // questionButton.onclick() = function(){
  //    questionButton.style.display = none;
  // }

  // Generate new question
  setQuestion = () => {
    const { questionBank } = this.state;
    // Create a random index so that each question is drawn at random
    const randomIndex = Math.floor(Math.random() * (questionBank.length + 1));
    // Set state of question to the randomly chosen question from the bank
    this.setState({
      question: questionBank[randomIndex].text
    });
    var questionButton = document.getElementById("question-button");
    questionButton.style.display = "none";
    // @todo Update lobby question to blackcards.text
  };

  // Start timer
  startTimer = () => {
    this.timer = setInterval(
      () =>
        this.setState({
          timerIsOn: true,
          time: this.state.time - 1
        }),
      1000
    );

    if (this.state.time === 0) {
      this.stopTimer();
      this.setState({
        time: "Time's Up!"
      });
    }
  };

  // Stop timer
  stopTimer = () => {
    this.setState({
      timerIsOn: false
    });
    clearInterval(this.timer);
    console.log("stop Timer.");
  };

  // Reset timer
  resetTimer = () => {
    this.setState({
      time: 30
    });
    console.log("reset Timer.");
  };

  onClick = () => {
    this.startTimer();
    this.setQuestion();
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
      <div className="everything">
      <Navbar/>
      <div className="container main-stuff">
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
      <Footer onClick={this.onClick} />
      </div>
    );
  }
}
export default Main;
