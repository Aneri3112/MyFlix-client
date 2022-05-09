import React from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

import './main-view.scss';

import { RegistrationView } from '../regigstration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {

  constructor(){
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      user: null
    };
  }

  componentDidMount() {
    axios.get('https://movie-api3112.herokuapp.com/movies')
    .then(response => {
      this.setState({
        movies: response.data
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  onLoggedIn(user) {
    this.setState ({
      user
    });
  }

  onRegistration(register) {
    this.setState ({
      register
    });
  }


  render() {
    const { movies, selectedMovie, user, register} = this.state;

    if (!register) return (<RegistrationView onRegistration={(register) => this.onRegistration(register)}/>);

    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

    //if (selectedMovie) return <MovieView movie={selectedMovie} />;

    if (movies.length === 0)
    return <div className="main-view" />;

    return (
      <Container>
        <Row className="main-view justify-content-md-center">
          {selectedMovie
            ? (
              <Col md={6}>
                <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
              </Col>
            ) 
            : movies.map(movie => (
              <Col lg={4} md={6}>
                <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie) }} />
              </Col>
            ))
          }
        </Row>
      </Container>  
    ); 
  }
} 