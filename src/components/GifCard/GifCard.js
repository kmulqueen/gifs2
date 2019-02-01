import React from "react";
// const AppContext = React.createContext(null);

const GifCard = props => {
  return (
    // <AppContext.Consumer>
    // {({ src }) => <img src={src} />}

    <div className="gif-box ">
      <img
        src={props.src}
        id={props.key}
        alt="GifCard"
        className=" gif"
        onClick={props.gifClick}
      />
    </div>

    // </AppContext.Consumer>
  );
};

export default GifCard;
