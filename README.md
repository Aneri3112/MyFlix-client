# myFlix-client

# [![Netlify Status](https://api.netlify.com/api/v1/badges/ad378fe0-d383-42be-a7a7-ad24dbe09075/deploy-status)](https://app.netlify.com/sites/cheery-gaufre-23d722/deploys)

## Description

The project is used to build client-side using React for the myFlix application on it's existing server-side code.

## What the app do (in short)

- Create an account
- Display the list of movies
- Display genres detail on click
- Display Director's detail on click
- Add and remove movies to favourite
- Edit user info
- Delete user account

## Dependencies

- React
- React-Dom
- Parcel
- Prop-types
- Axios
- React-Bootstrap
- React-Redux
- React-Router-Dom
- Redux
- Redux-Devtools-Extension

### Key Features

- Main view

* Return a list of all movies to the loggedin user (with Image, Title and Description)
* Sorting and Filtering
* And Ability to view more details about movies with one click

- Login / Registration

* Can create an account using Username, Password, Email and Birthday
* Can Login with Username and Password

- Profile view

* Allows User to update their user information
* Allow user to delete their account
* Allow user to see the list of their favourite movies and can remove it from their profile

## Technical Requirements (according to project brief)

- SPA application built using React
- Navigate between views using react-router-dom
- Use Parcel as build tool
- Use react-bootstrap for UI
- Use React Redux for state management (respecting the Flux pattern)
- Use both class and function components
- Use axios to connect to API (providing user and movie information)

## Development Process of the Client-Side for myFlix Application

### Create React components for each view

- Main View routes to all sub views using react-router-dom
- Create functional component for each sub view // distinct functionality in view
- Use bootstrap Card component to create Movie card for each movie

### Connect to database via axios

- Get data on movies and users from API using axios library
