import React, { Component } from "react";
import axios from "axios";

class Questions extends Component {
    state = {
        questionBank: [],
        question: ""
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
            <div className="container row">
                <button id="question-button" className="question-button col-3" onClick={this.setQuestion}>New Question?</button>
                <div className="col-12 question">{this.state.question}</div>

            </div>
        );
    }
}
export default Questions;