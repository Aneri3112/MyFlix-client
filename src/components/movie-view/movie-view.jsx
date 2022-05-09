import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button} from 'react-bootstrap';

import './movie-view.scss';

export class MovieView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;

    return (
      
      <Card id='movie-vieww'>
        <Card.Body>
          <Card.Img id='movie-view-image' variant='top' src={movie.Imagepath} />
          <Card.Title id='movie-title' className='movie-title'>{movie.Title}</Card.Title>
          <Card.Text id='movie-description' className='movie-description'>{movie.Description}</Card.Text>
          <Card.Text id='movie-genre'  className='movie-genre'>Genre: {movie.Genre.Name}</Card.Text>
          <Card.Text id='movie-director' className='movie-director'>Director: {movie.Director.Name}</Card.Text>
        </Card.Body>
        <Button variant='success' id='movie-view-button' onClick={() => { onBackClick(null); }}>Back</Button>
        <Button variant='success' id="movie-view-button" onClick={() => {}}>Add to favorites</Button>
      </Card>
          
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Imagepath: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired
    })
  }),
  onBackClick: PropTypes.func.isRequired
};