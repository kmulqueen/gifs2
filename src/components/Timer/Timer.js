import React, { Component } from "react";
import axios from "axios";

class Timer extends Component {
  

 

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
      
        <h1>Time: {this.state.time}</h1>
        
    );
  }
}
export default Timer;
