import React from "react";
import { Container,Media } from 'reactstrap';
// const AppContext = React.createContext(null);

const GifCard = props => {
  return (
    // <AppContext.Consumer>
    // {({ src }) => <img src={src} />}

    <Container id="gif-box">
      <Media
        src={props.src}
        id={props.key}
        alt="GifCard"
        class="gif"
        onClick={props.gifClick}
      />
    </Container>

    // </AppContext.Consumer>
  );
};

export default GifCard;
