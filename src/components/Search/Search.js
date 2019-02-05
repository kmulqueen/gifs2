import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
  Col,
  Container
} from "reactstrap";
import { search } from "../../store/actions/searchActions";
import { connect } from "react-redux";
import GifCard from "../GifCard/GifCard";
// const AppContext = React.createContext(null);

const Search = props => {
  return (
    <Container id="search">
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <Form class="search-form" onSubmit={props.handleSubmit}>
            <FormGroup>
              <Input
                type="text"
                placeholder="Search.."
                name="search"
                onChange={props.handleInput}
              />
            </FormGroup>
          </Form>
        </Col>
        <Col md="2">
          <Button type="submit" onClick={props.handleSubmit}>
            Search
          </Button>
        </Col>
      </Row>
      <Row>
        <Col id="gif-container">
          <div id="gifs">
            <div className="arrow-gifs">
              {props.gifs.map(gif => (
                <GifCard
                  src={gif.images.downsized_medium.url}
                  key={gif.id}
                  gifClick={props.gifClick}
                />
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
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
