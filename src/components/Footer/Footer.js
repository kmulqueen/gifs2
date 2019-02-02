import React, { Component } from "react";
import "./Footer.css";
import Search from "../Search";
import Timer from "../Timer";
import Questions from "../Questions";

class Footer extends Component {
  state = {
    // questionBank: [],
    // question: "",
    time: 30,
    timerIsOn: false
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

  // onClick = () => {
  //   this.startTimer();
  //   this.setQuestion();
  // };

  // Get questionBank filled when the component loads
  // componentDidMount() {
    // axios GET to questions json url
  //   axios
  //     .get("https://api.myjson.com/bins/19wq0e")
  //     // set questionBank state to the array of black cards
  //     .then(res =>
  //       this.setState({
  //         questionBank: res.data.blackCards
  //       })
  //     )
  //     .catch(err => console.log(err));
  // }
  
  onClick = () => {
    this.startTimer();
    this.setQuestion();
  };

  render() {
    
    return (
      <div className="footer">
        <div className="col-3 left-side">
        <Timer time={this.state.time} />
          <div className="points">
            <div className="losses" />
            <div className="wins" />
          </div>
        </div>
        <div className="col-10 right-side">
          <div className=" search-area">
            <Search />
          </div>
          
            
            
          </div>
        </div>
      
    );
  }
}
export default Footer;
