import React, { Component } from 'react'

class Search extends Component {
    render() {
        return (
            <div className="container">
            <form className="row col-12" action="">
      <input className="col-8" type="text" placeholder="Search.." name="search"></input>
      <button className="col-4" type="submit">Submit</button>
    </form>
            </div>
        )
    }
}
export default Search;