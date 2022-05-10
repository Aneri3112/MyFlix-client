import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import './header-view.scss';

export function HeaderView({ user }) {

  return (

    <Navbar id="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
          <Navbar.Brand id="navbrand" href="#home">MyFlix</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link id="navhome" href="#home">Home</Nav.Link>
              <Nav.Link id="navprofile" href="#profile">Profile</Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
            <Nav.Link id="navlink" href="#link">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

  