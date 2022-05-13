import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Card, Button, Container} from 'react-bootstrap';

import './movie-view.scss';

export class MovieView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      FavouriteMovies: []
    };
    this.onAddFavorite = this.onAddFavorite.bind(this);
    this.onRemoveFavorite = this.onRemoveFavorite.bind(this);
  }

  getUser(token) {
    let Username = localStorage.getItem('user');
    axios
      .get(`https://movie-api3112.herokuapp.com/users/${Username}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.setState({
          FavouriteMovies: response.data.FavouriteMovies
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  componentDidMount() {
    const accessToken = localStorage.getItem("token");
    this.getUser(accessToken);
  }

  onAddFavorite(movie) {
    const Username = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    const id = this.props.movie._id;

    let userFavorites = this.state.FavouriteMovies;
    let isFav = userFavorites.includes(id);
    
    if (!isFav) {
    axios.patch(
      `https://movie-api3112.herokuapp.com/users/${Username}/movies/${movie._id}`,
      {
        FavouriteMovies: this.state.FavouriteMovies
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.setState({
          FavouriteMovies: response.data.FavouriteMovies
        });
        console.log(response);
        alert("Movie Added");
        window.open(`/movies/${movie._id}`, "_self");
      })
      .catch(function (error) {
        console.log(error);
      });
    };
  }  

  onRemoveFavorite (movie) {
    const Username = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    const id = this.props.movie._id;

    axios
      .delete(
        `https://movie-api3112.herokuapp.com/users/${Username}/movies/${movie._id}`,
        {
          headers: { Authorization: `Bearer ${token}` }
        },
      )
      .then((response) => {
        console.log(response);
        alert("Movie removed");
        window.open(`/movies/${movie._id}`, "_self");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  
  render() {
    const { movie, onBackClick, onAddFavorite } = this.props;
    let movieId = this.props.movie._id;
    let userFav = this.state.FavouriteMovies;
    let isFav = userFav.includes(movieId);

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
        {!isFav && (
          <Button variant='success' id='movie-view-button' value={movie._id} onClick={() => this.onAddFavorite(movie)}>Add to favorites</Button>
        )}
        {isFav && (
          <Button variant='success' id='movie-view-button'  value={movie._id} onClick={() =>this.onRemoveFavorite(movie)} >
            Remove from favorites
          </Button>
        )} 
          
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