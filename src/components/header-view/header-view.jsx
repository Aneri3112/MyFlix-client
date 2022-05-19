import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import './header-view.scss';

export function HeaderView({ user }) {

  const onLoggedOut = () => {
    localStorage.clear();
    window.open("/", "_self");
  }

  const isAuth = () => {
    if(typeof window == "undefined") {
      return false;
    }
    if(localStorage.getItem("token")) {
      return localStorage.getItem("token");
    } else {
      return false;
    }
  };

  return (

    <Navbar id="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
          <Navbar.Brand id="navbrand" href="/">MyFlix</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              {isAuth() && (
                <Nav.Link id="header-link" href={`/users/${user}`}>{user}</Nav.Link>
              )}
              {isAuth() && (
                <Nav.Link id="header-link" onClick={() => { onLoggedOut() }}>Logout</Nav.Link>
              )}
              {!isAuth() && (
                <Nav.Link id="header-link" href="/">Sign-in</Nav.Link>
              )}
              {!isAuth() && (
                <Nav.Link id="header-link" href="/register">Sign-up</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

  