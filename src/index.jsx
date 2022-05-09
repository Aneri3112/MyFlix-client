import React from "react";
import ReactDom from "react-dom";
import { MainView } from "./components/main-view/main-view"; 

import './index.scss';
import { Container, Navbar, Nav } from "react-bootstrap";

//Main Component
class MyFlixApplication extends React.Component {
  render() {
    return (
      <Container>
        <Navbar id="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Brand id="navbrand" href="#home">MyFlix</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link id="navhome" href="#home">Home</Nav.Link>
                <Nav.Link id="navlink" href="#link">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> <br /> <br />
        
          < MainView />
      </Container>
    );
  }
}

//Find the root of the app
const container = document.getElementsByClassName('app-container') [0];

//Tells react to render the app in the root DOM element
ReactDom.render(React.createElement(MyFlixApplication), container);  