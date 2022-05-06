import React from "react";
import ReactDom from "react-dom";
import Container from "react-bootstrap/Container";
import { MainView } from "./components/main-view/main-view"; 

import './index.scss';

//Main Component
class MyFlixApplication extends React.Component {
  render() {
    return (
      <Container id="main-view">
        <MainView />
      </Container>
    );
  }
}

//Find the root of the app
const container = document.getElementsByClassName('app-container') [0];

//Tells react to render the app in the root DOM element
ReactDom.render(React.createElement(MyFlixApplication), container);  