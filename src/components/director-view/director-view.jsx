import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import './director-view.scss';

export class DirectorView extends React.Component {
  render() {
    const { director, onBackClick } = this.props;

    return (
      <Card id="director-card">
        <Card.Body>
          <Card.Header id="director-header">About Director</Card.Header>
          <Container className="director-view">
            <Card.Text id="director-name" >Name: {director.Name} </Card.Text>
            <Card.Text id="director-bio">Bio: {director.Bio} </Card.Text>
            <Card.Text id="director-born">Born: {director.Birth}</Card.Text>
            {director.Death && (
              <Col>
                <Card.Text >Death: {director.Death}</Card.Text>
              </Col>
            )}
          </Container>
          <p></p>
          <Container className="d-flex justify-content-between">
            <Button className="custom-btn" type="submit" variant="dark" onClick={() => { onBackClick(); }} >Go back</Button>
            <Link to={`/`}>
              <Button className="custom-btn" type="submit" variant="dark" >Back to List</Button>
            </Link>
          </Container>
        </Card.Body>
      </Card>
    );
  }
}
DirectorView.prototypes = {
  director: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Bio: PropTypes.string.isRequired,
    Born: PropTypes.string.isRequired
  }),
  onBackClick: PropTypes.func.isRequired
};