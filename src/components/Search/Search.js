import React, { Component } from "react";
import axios from "axios";
import { search } from "../../store/actions/searchActions";
import { connect } from "react-redux";
import { apiKey } from "../../config/giphyConfig";

import GifCard from "../GifCard/GifCard";
const AppContext = React.createContext(null);

class Search extends Component {
  state = {
    gifs: [],
    search: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const { gifs, search } = this.state;
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
        console.log("gifs:", gifs);
      })
      .catch(err => console.log(err));
  };

  handleInput = e => {
    console.log("input:", e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <form className="row col-12" onSubmit={this.handleSubmit}>
          <input
            className="col-8"
            type="text"
            placeholder="Search.."
            name="search"
            onChange={this.handleInput}
          />
          <button className="col-4" type="submit">
            Submit
          </button>
        </form>
        <div className="row col-12">
          {this.state.gifs.map(gif => (
            <GifCard src={gif.images.downsized_medium.url} key={gif.id} />
          ))}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    search: term => dispatch(search(term))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Search);
