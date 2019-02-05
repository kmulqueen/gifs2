import React, { Component } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col, Container } from 'reactstrap';
import { search } from "../../store/actions/searchActions";
import { connect } from "react-redux";
import { apiKey } from "../../config/giphyConfig";
import GifCard from "../GifCard/GifCard";
const AppContext = React.createContext(null);


class Search extends Component {
  state = {
    gifs: [],
    search: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const { search } = this.state;
    // axios get request to giphy
    axios
      .get(
        `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${apiKey}&limit=5`
      )
      .then(res => {
        // set gifs state to store the array of gifs from response
        this.setState({
          gifs: res.data.data
        });
        console.log("gifs:", this.state.gifs);
      })
      .catch(err => console.log(err));
  };

  handleInput = e => {
    console.log("input:", e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  gifClick = e => {
    console.log("gif clicked");
    console.log(e.target.src);
  };

  render() {
    return (
      <Container id="search">
        <Row>
          <Col md={{ size: 8, offset: 2 }}>
            <Form class="search-form" onSubmit={this.handleSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  placeholder="Search.."
                  name="search"
                  onChange={this.handleInput}
                />
              </FormGroup>
            </Form>
          </Col>
          <Col md="2">
            <Button type="submit" onClick={this.handleSubmit}>
              Submit
            </Button>
          </Col>
        </Row>
        <Row>
          <Col id="gif-container">
            <div id="gifs">
              <div class="arrow-gifs">
                {this.state.gifs.map(gif => (
                  <GifCard
                    src={gif.images.downsized_medium.url}
                    key={gif.id}
                    gifClick={this.gifClick}
                  />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    search: term => dispatch(search(term))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Search);
