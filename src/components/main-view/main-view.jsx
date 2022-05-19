import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import { setMovies, setUser, setUserData, getToken } from '../../actions/actions';
import  MoviesList from '../movies-list/movies-list';

import { Row, Col, Container  } from 'react-bootstrap';

import './main-view.scss';

import { RegistrationView } from '../regigstration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { HeaderView } from '../header-view/header-view';
import { GenreView } from '../genre-view/genre-view';
import { DirectorView } from '../director-view/director-view';
import { ProfileView } from '../profile-view/profile-view';

class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  getMovies(token) {
    axios.get('https://movie-api3112.herokuapp.com/movies', {
      headers: {Authorization: `Bearer ${token}`}
    })
    .then(response => {
      //Assign result to the state
      this.props.setMovies(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getMovies(accessToken);   
    }
  }

  setSelectedMovie(movie) {
    this.setState({
      selectedMovie: movie
    });
  } 

  onLoggedIn(authData) {
    console.log(authData);
    this.setState ({
      user: authData.user.Username
    });
    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }

  /* onRegistration(register) {
    this.setState ({
      register
    });
  } */

  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null
    });
  }
  
  render() {
    let { movies } = this.props;
    let { user } = this.state;

    return (
      <Router>
        <HeaderView user={user} /> 
        <Container>
          <Row className="main-view justify-content-md-center">
            <Route exact path="/" render={() => {
              if(!user) return  <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
              </Col>
              if(movies.length === 0) return <div className="main-view" />;

              return <MoviesList movies={movies}/>; 
            }} />

            <Route path="/register" render={() => {
              if (user) return <Redirect to= "/" />
              return <Col>
              <RegistrationView />
              </Col>
            }} />

            <Route path="/movies/:movieId" render={({ match, history }) => {
              if(!user) return  
              <Col>
                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
              </Col>
              if(movies.length === 0) return <div className="main-view" />;
              return <Col lg={6} md={8} >
                <MovieView movie={movies.find(m => m._id === match.params.movieId)} onBackClick={() => history.goBack()} />
              </Col>
            }} />

            <Route exact path="/director/:name" render={( { match, history }) => {
              if(!user) return  <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
              </Col>
              if(movies.length === 0) return <div className="main-view" />;
              return <Col md={6}>
                <DirectorView director={movies.find(m => m.Director.Name === match.params.name).Director} onBackClick={() => history.goBack()}/>
              </Col>
            }}/>

            <Route exact path="/genre/:name" render={( { match, history } ) => {
              if(!user) return  <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
              </Col>
              if(movies.length === 0) return <div className="main-view" />;
              return <Col md={6}>
                <GenreView genre={movies.find(m => m.Genre.Name === match.params.name).Genre} onBackClick={() => history.goBack()}/>
              </Col>
            }} />

          <Route path={`/users/${user}`}
            render={({ history }) => {
              if (!user) {
                return (
                  <Col>
                    <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                  </Col>
                );
              }
  
              return (
                <Col md={6}>
                  <ProfileView movies={movies} user={user} onBackClick={() => history.goBack()} />
                </Col>
              );
            }} />
          </Row>
        </Container>
      </Router> 
    );    
  }
}

let mapStateToprops = state => {
  return { movies: state.movies, user: state.user, userData: state.userData }
}
export default connect(mapStateToprops, { setMovies, setUser, setUserData, getToken }) (MainView);
  /*render() {
    const { movies, user } = this.state;

    //if (selectedMovie) return <MovieView movie={selectedMovie} />;

    //if (!register) return (<RegistrationView onRegistration={(register) => this.onRegistration(register)}/>);

    if (!user) return <Row>
      <Col>
      <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
      </Col>
    </Row>

    if (movies.length === 0) return <div className="main-view" />;

    return (
      <Router>
          <Row>
            <HeaderView user ={user} />
            <button onClick={() => { this.onLoggedOut() }}>Logout</button>
          </Row>
          <Row className="main-view justify-content-md-center">
            <Route exact path='/' render={() => {
              return movies.map(m => (
                <Col md={6} key={m._id}>
                   <MovieCard movie ={m} />
                </Col>
              ))
            }} />
            <Route path='/movies/movieId' render={({ match }) =>{
              return <Col lg={4} md={6}>
                <MovieView movie={movies.find(m => m._id === match.params.movieId)} />
              </Col>
            }}/>
            
          </Row>
      </Router>    
    ); 
  }
} */