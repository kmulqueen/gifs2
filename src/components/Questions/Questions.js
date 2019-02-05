import React from "react";
import { Container, Col, Row, Button } from 'reactstrap';

const Questions = props => {
  return (

    <Container>
      <Row>
        <Button md="3"
          id="question-button"
          class="question-button "
          onClick={props.startRound}
        >
          New Question?
        </Button>
      </Row>
      <Row>
        <Col md="12" id="question">{props.question}
        </Col>
      </Row>
    </Container>

  );
};

export default Questions;
