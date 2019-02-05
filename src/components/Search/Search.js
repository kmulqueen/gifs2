import React from "react";
import { search } from "../../store/actions/searchActions";
import { connect } from "react-redux";
import GifCard from "../GifCard/GifCard";

// const AppContext = React.createContext(null);

const Search = props => {
  return (
    <div className="container">
      <form className="row search-form" onSubmit={props.handleSubmit}>
        <input
          className="col-7"
          type="text"
          placeholder="Search.."
          name="search"
          onChange={props.handleInput}
        />
        <button className="col-4" type="submit">
          Search
        </button>
      </form>
      <div className="gif-container row col-9">
        <div className="gifs">
          <div className="arrow-gifs row">
            {/* <button>left</button> */}
            {props.gifs.map(gif => (
              <GifCard
                src={gif.images.downsized_medium.url}
                key={gif.id}
                gifClick={props.gifClick}
              />
            ))}
            {/* <button>right</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    search: term => dispatch(search(term))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Search);
