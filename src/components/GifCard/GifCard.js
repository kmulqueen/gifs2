// import React, { Component } from 'react'

// class GifCard extends Component {
//     render() {
//         return (
//             <div className="container">
//                 <div className="row col-12">
//                     <button className="col-2">arrow left</button>
//                     <div className="col-2 gif">Gif 1</div>
//                     <div className="col-2 gif">Gif 2</div>
//                     <div className="col-2 gif">Gif 3</div>
//                     <div className="col-2 gif">Gif 4</div>
//                     <button className="col-2">arrow right</button>
//                 </div>
//             </div>
//         )
//     }
// }
import React from "react";
const AppContext = React.createContext(null);

const GifCard = props => {
  return (
    // <AppContext.Consumer>
    // {({ src }) => <img src={src} />}

    <img src={props.src} id={props.key} alt="GifCard" className="col-2 gif" />

    // </AppContext.Consumer>
  );
};

export default GifCard;
