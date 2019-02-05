import React, { Component } from "react";
import axios from "axios";
import { apiKey } from "../../config/giphyConfig";
import Main from "../../components/Main";
import Questions from "../../components/Questions/Questions";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";

class Game extends Component {
  state = {
    // Search
    gifs: [],
    search: "",
    submission: "",
    // Questions
    questionBank: [],
    question: "",
    // Timer
    time: 10,
    timerIsOn: false
  };

  //=========== TIMER FUNCTIONS ===========//
  // Start Game Timer
  startTimer = () => {
    console.log("start timer ran.");
    this.setState({
      timerIsOn: true,
      time: this.state.time
    });
    this.timer = setInterval(
      () =>
        this.setState({
          time: this.state.time - 1
        }),
      1000
    );
    this.timeRec = setInterval(() => {
      if (this.state.time === 0) {
        this.stopTimer();
      }
    }, 1000);
  };

  // Stop Game Timer
  stopTimer = () => {
    console.log("stop timer ran.");
    this.setState({
      timerIsOn: false,
      time: "Time's Up!"
    });
    clearInterval(this.timer);
    clearInterval(this.timeRec);
  };

  // Reset Game Timer
  resetTimer = () => {
    console.log("reset timer ran.");
    this.setState({
      time: 30
    });
  };

  //=========== QUESTION FUNCTION ===========//
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

  //=========== START ROUND FUNCTION ===========//
  // Start Round (Generate Question & Start Timer)
  startRound = () => {
    console.log("start round ran");
    this.startTimer();
    this.setQuestion();
  };

  //=========== GIF SEARCH & CLICK FUNCTIONS ===========//
  // Handle Gif Search Input
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // Handle Gif Search Submit
  handleSubmit = e => {
    e.preventDefault();
    const { search } = this.state;
    // axios get request to giphy
    axios
      .get(
        `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${apiKey}&limit=5`
      )
      .then(res => {
        // set gifs state to store the array of gifs from response
        this.setState({
          gifs: res.data.data
        });
        console.log("gifs:", this.state.gifs);
      })
      .catch(err => console.log(err));
  };

  // Set state of user's submission when they click a gif to submit
  gifClick = e => {
    console.log("gif clicked");
    console.log(e.target.src);
    this.setState({
      submission: e.target.src
    });
  };

  //=========== COMPONENT DID MOUNT ===========//
  // Once component is mounted, then we can make an axios call
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
      <div className="container-fluid">
        <Navbar />
        <Questions
          question={this.state.question}
          questionBank={this.state.questionBank}
          startRound={this.startRound}
        />
        <Main submission={this.state.submission} />
        <Footer
          timer={this.state.time}
          submission={this.state.submission}
          search={this.state.search}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
          gifClick={this.gifClick}
          gifs={this.state.gifs}
        />
      </div>
    );
  }
}
export default Game;
