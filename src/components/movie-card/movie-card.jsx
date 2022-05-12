import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CardGroup, Card, Button, Container } from 'react-bootstrap';

import './movie-card.scss';
import { Link } from 'react-router-dom';

export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      
      <CardGroup id='movie-cardgroup'>
        <Card id='movie-card' className='cards'> 
            <Card.Body>  
              <Card.Img id='card-image' variant='top' src={movie.Imagepath} />
              <Card.Title id='card-title'>{movie.Title}</Card.Title>
              <Card.Text className='d-block text-truncate' id='card-description'>{movie.Description}</Card.Text>
              <Container>
                <Link to={`/movies/${movie._id}`}>
                  <Button id='card-button' variant='link'> More Detail</Button>
                </Link>
              </Container>
            </Card.Body>  
        </Card>
      </CardGroup>
    ) 
  }
}

MovieCard.propType = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Imagepath: PropTypes.string.isRequired
  }),
  onMovieClick: PropTypes.func.isRequired
};