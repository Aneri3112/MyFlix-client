import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import './genre-view.scss'

export class GenreView extends React.Component {
  render() {
    const { genre, onBackClick } = this.props;

    return (
      <Card id="genre-card">
        <Card.Body>
          <Container className="genre-view">
            
              <Card.Header id="genre-title">{genre.Name} </Card.Header>
              <Card.Text id="genre-description">{genre.Description}</Card.Text>
            
          </Container>
          <p></p>
          <Container className="d-flex justify-content-between">
           
            <Button className="custom-btn" type="submit" variant="dark" onClick={() => { onBackClick(); }} >Go back</Button>
            <Link to={`/`}>
              <Button className="custom-btn" type="submit" variant="dark" >Back to List</Button>
            </Link>
          </Container>
        </Card.Body>
      </Card>
    );
  }
}

GenreView.propTypes = {
  genre: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
  })
};