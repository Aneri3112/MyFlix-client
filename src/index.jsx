import React from "react";
import ReactDom from "react-dom";
import { MainView } from "./components/main-view/main-view"; 

import './index.scss';
import Container from "react-bootstrap/Container";

//Main Component
class MyFlixApplication extends React.Component {
  render() {
    return (
      <Container>
          < MainView />
      </Container>
    );
  }
}

//Find the root of the app
const container = document.getElementsByClassName('app-container') [0];

//Tells react to render the app in the root DOM element
ReactDom.render(React.createElement(MyFlixApplication), container);  