import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Form, Button, Container, Row, Col, CardGroup, Card } from 'react-bootstrap';

import './login-view.scss';

export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  //Declare hook 
  const [ usernameErr, setUsernameErr ] = useState('');
  const [ passwordErr, setPasswordErr ] = useState('');
 
  const validate = () => {
    let isReq = true;
    if(!username){
     setUsernameErr('Username Required');
     isReq = false;
    }else if(username.length < 2){
     setUsernameErr('Username must be 2 characters long');
     isReq = false;
    }
    if(!password){
     setPasswordErr('Password Required');
     isReq = false;
    }else if(password.length < 6){
     setPassword('Password must be 6 characters long');
     isReq = false;
    }

    return isReq;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
      /* Send a request to the server for authentication */
      axios.post('https://movie-api3112.herokuapp.com/login', {
        Username: username,
        Password: password
      })
      .then(response => {
        const data = response.data;
        props.onLoggedIn(data); 
      })
      .catch(response => {
        console.log('response');
        alert('something wasn\'t entered correct');
      })
    } 
  };

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
                  {usernameErr && <p>{usernameErr}</p>}
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} 
                  required
                  />
                  {passwordErr && <p>{passwordErr}</p>}
                  </Form.Group>

                  <Button className='login-button' variant='success' type="submit" onClick={handleSubmit}>Submit</Button><br />
                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
   
  );
}
