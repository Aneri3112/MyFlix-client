import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Card, Button, Container} from 'react-bootstrap';

import './movie-view.scss';

export class MovieView extends React.Component {

  constructor() {
    super();

    this.state = {
      FavouriteMovies: []
    };
  }

  onAddFavorite = (movie) => {
    const Username = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    axios.patch(
      `https://movie-api3112.herokuapp.com/users/${Username}/movies/${movie._id}`,
      {
        FavouriteMovies: this.state.FavoriteMovies
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.setState({
          FavouriteMovies: response.data.FavoriteMovies
        });
        console.log(response);
        alert("Movie Added");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const { movie, onBackClick, onAddFavorite} = this.props;

    return (
      
      <Card id='movie-vieww'>
        <Card.Body>
          <Container>
            <Card.Img id='movie-view-image' variant='top' src={movie.Imagepath} />
            <Card.Title id='movie-title' className='movie-title'>{movie.Title}</Card.Title>
            <Card.Text id='movie-description' className='movie-description'>{movie.Description}</Card.Text>
          </Container>
          <p></p>
          <Container className="d-flex justify-content-between">
            <Link to={`/genre/${movie.Genre.Name}`}>
              <Button variant="outline-danger">Genre: {movie.Genre.Name}</Button>
            </Link>
            <Link to={`/director/${movie.Director.Name}`}>
              <Button variant="outline-danger">Director: {movie.Director.Name}</Button>
            </Link>
          </Container>
        </Card.Body>
        <Button variant='success' id='movie-view-button' onClick={() => { onBackClick(null); }}>Back</Button>
        <Button variant='success' id="movie-view-button" value={movie._id} onClick={() => this.onAddFavorite(movie)}>Add to favorites</Button>
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