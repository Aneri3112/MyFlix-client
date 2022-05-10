import React from 'react';
import PropTypes from 'prop-types';
import { CardGroup, Card, Button } from 'react-bootstrap';

import './movie-card.scss';

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;
    return (
      
      <CardGroup id='movie-cardgroup'>
        <Card id='movie-card' className='cards'>
          <Card.Img id='card-image' variant='top' src={movie.Imagepath} />
          <Card.Body>
            <Card.Title id='card-title'>{movie.Title}</Card.Title>
            <Card.Text className='d-block text-truncate' id='card-description'>{movie.Description}</Card.Text>
            <Button id='card-button' onClick={() => onMovieClick(movie)} variant='link'> More Detail</Button>
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