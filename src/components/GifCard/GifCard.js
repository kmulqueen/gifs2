import React, { Component } from 'react'

class GifCard extends Component {
    render() {
        return (
            <div className="container">
                <div className="row col-12">
                    <button className="col-2">arrow left</button>
                    <div className="col-2 gif">Gif 1</div>
                    <div className="col-2 gif">Gif 2</div>
                    <div className="col-2 gif">Gif 3</div>
                    <div className="col-2 gif">Gif 4</div>
                    <button className="col-2">arrow right</button>
                </div>
            </div>
        )
    }
}
export default GifCard;