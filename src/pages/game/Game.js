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
  // Start Timer
  startTimer = () => {
    this.timer = setInterval(
      () =>
        this.setState({
          timerIsOn: true,
          time: this.state.time - 1
        }),
      1000
    );
  };

  // Stop timer
  stopTimer = () => {
    this.setState({
      timerIsOn: false,
      time: "Time's Up!"
    });
    clearInterval(this.timer);
    console.log(
      "stop Timer.",
      "timer:",
      this.timer,
      "time state:",
      this.state.time
    );
  };

  // Reset timer
  resetTimer = () => {
    this.setState({
      time: 30
    });
    console.log("reset Timer.");
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
  // Start Round
  startRound = () => {
    this.startTimer();
    this.setQuestion();
  };

  //=========== GIF SEARCH & CLICK FUNCTIONS ===========//
  // Gif Click
  gifClick = e => {
    console.log("gif clicked");
    console.log(e.target.src);
    this.setState({
      submission: e.target.src
    });
  };

  // Handle Submit
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

  // Handle Input
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
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
          stopTimer={this.stopTimer}
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
