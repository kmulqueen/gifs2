import React from "react";
import Search from "../Search";
import Timer from "../Timer";
import { Container, Col, Row } from "reactstrap";

const Footer = props => {
  return (
    <Container id="footer">
      <Row>
        <Col md={{ size: 2, offset: 1 }} class="left-side">
          <Timer time={props.timer} stopTimer={props.stopTimer} />
          <div class="points">
            <div class="losses" />
            <div class="wins" />
          </div>
        </Col>
        <Col md={{ size: 8 }} class="col-10 right-side">
          <Search
            submission={props.submission}
            search={props.search}
            onSubmit={props.handleSubmit}
            handleInput={props.handleInput}
            handleSubmit={props.handleSubmit}
            gifs={props.gifs}
            gifClick={props.gifClick}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
