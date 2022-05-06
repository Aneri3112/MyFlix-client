import React from 'react';
import PropTypes from 'prop-types';
import { CardGroup, Container, Card, Button, Row, Col } from 'react-bootstrap';

import './movie-card.scss';

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;
    return (
      <Container className='movie-card-container'>
        <Row xs={1} md={0} className="g-4"> 
            <Col>
              <CardGroup id='movie-cardgroup'>
              <Card id='movie-card' className='col-sm-4'>
              <Card.Img id='card-image' variant='top' src={movie.Imagepath} />
                <Card.Body>
                  <Card.Title id='card-title'>{movie.Title}</Card.Title>
                  <Button id='card-button' onClick={() => onMovieClick(movie)} variant='link'> More Detail</Button>
                </Card.Body>
              </Card>
              </CardGroup>
            </Col>
        </Row>
      </Container>  
    ) 
  }
}

MovieCard.propType = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};