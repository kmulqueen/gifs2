import React from "react";
import { Container, Col, Row } from "reactstrap";

const Main = props => {
  return (
    <Container>
      <Row>
        <Col md={{ size: 4 }} class="col-4 user-choice">
          <img src={props.submission} alt={props.submission} />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
