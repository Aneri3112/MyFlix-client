import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Container, Row, Col, CardGroup, Card } from 'react-bootstrap';

import './login-view.scss';

export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onLoggedIn(username);
  };

  const handleRegister = (e) => {
    e.preventDefault()
    props.onRegistration(true)
  }

  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col md={6}>
          <CardGroup>
            <Card className='login-card'>
              <Card.Body>
                <Card.Header className='login-header'> Sign in to your account</Card.Header>
                <Form>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Username:</Form.Label>
                  <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} 
                  required
                  />
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} 
                  required
                  />
                  </Form.Group>

                  <Button className='login-button' variant='success' type="submit" onClick={handleSubmit}>Submit</Button><br />
                  <Button className='register-button' variant='success' type='submit' onClick={handleRegister}> Register Your Account</Button>
                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
   
  );
}

LoginView.propTypes = {
  onLoggedIn: PropTypes.func.isRequired,
};