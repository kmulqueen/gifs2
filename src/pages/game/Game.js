import React, { Component } from "react";
import Main from "../../components/Main";
import Footer from '../../components/Footer';
import Navbar from "../../components/Navbar/Navbar";

class Game extends Component {
  render() {
    return (

      <div className="container">
      <Navbar/>
        <Main />
        <Footer />
      </div>
    );
  }
}
export default Game;
