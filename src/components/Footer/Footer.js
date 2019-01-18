import React, { Component } from "react";
import "./Footer.css";
import Search from "../Search";
import GifCard from "../GifCard";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="col-3 left-side">
          <div className="timer">This is where the timer goes</div>
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
