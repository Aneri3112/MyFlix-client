export const SET_MOVIES = 'SET_MOVIES';
export const SET_FILTER = 'SET_FILTER';
export const SET_USER = 'SET_USER';
export const SET_USERDATA = 'SET_USER';
export const ADD_FAVMOVIES = 'ADD_FAVMOVIES';
export const REM_FAVMOVIES = 'REM_FAVMOVIES';


export function setMovies(value) {
  return { type: SET_MOVIES, value };
}

export function setFilter(value) {
  return { type: SET_FILTER, value };
}

export function setUser(value) {
  return { type: SET_USER, value };
}

export function setUserData(value) {
  return { type: SET_USERDATA, value };
}

export function addFavouriteMovies(value) {
  return { type: ADD_FAVMOVIES, value };
}

export function removeFavouriteMovies(value) {
  return { type: REM_FAVMOVIES, value };
}