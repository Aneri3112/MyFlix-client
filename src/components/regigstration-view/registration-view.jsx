import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, CardGroup, Card, Form, Button } from 'react-bootstrap';
import './registration-view.scss';

//user registration form taking necessary user details
export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email, birthday);
    props.onRegistration(username);
  };

  return (
    <Container className='login-container'>
      <Row>
        <Col md="12">
          <CardGroup>
            <Card className='registration-card'>
              <Card.Body>
                <Card.Header className='cardheader'>Register for myFlix</Card.Header>
                <Form>
                  <Form.Group>
                    <Form.Label className='form-label'>Username:</Form.Label>
                    <Form.Control type="text" 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder='Enter Username'
                      required
                    />
                  </Form.Group>
                  
                  <Form.Group>
                    <Form.Label className='form-label'>Password:</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder='Enter Password'
                      required
                      minLength="8" 
                    />
                  </Form.Group>  
          
                  <Form.Group>
                    <Form.Label className='form-label'>Email:</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='Enter your email address'
                      required
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label className='form-label'>Birthday:</Form.Label>
                    <Form.Control
                      type="date"
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Button className='register-button' variant='success' type="submit" onClick={handleSubmit}>
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
    
  );
}

RegistrationView.propTypes = {
  register: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthday: PropTypes.string.isRequired,
  }),
  onRegistration: PropTypes.func.isRequired,
};