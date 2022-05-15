import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Container, Row, Col, CardGroup, Card, Form, Button } from 'react-bootstrap';

import './registration-view.scss';

//user registration form taking necessary user details
export function RegistrationView(props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  //Declare hook 
  const [usernameErr, setUsernameErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [birthdayErr, setbirthdayErr] = useState('');

  const validate = () => {
    let isReq = true; 
    if(!username){
      setUsernameErr('Username Required');
      isReq = false; 
    } else if(username.length < 5){
      setUsernameErr('Username must be 5 characters long');
      isReq = false;
    }
    if(!password){
      setPasswordErr('Password Required');
      isReq=false;
    }else if (password.length < 6){
      setPasswordErr('Password must be 6 characters long');
      isReq=false;
    }
    if(!email){
      setEmailErr('Please enter valid Email Address');
      isReq = false;
    } else if(email.indexOf('@') === -1){
      setEmail('Invalid Email');
      isReq = false; 
    }
    if(!birthday){
      setbirthdayErr('Please enter birthdate');
      isReq = false;
    } 
   
    return isReq;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
      axios.post('https://movie-api3112.herokuapp.com/users', {
        Username: username, 
        Password: password, 
        Email: email, 
        Birthday: birthday
      })
      .then(response => {
        const data = response.data;
        console.log(data);
        alert('Success! Please Login')
        window.open('/', '_self');
      })
      .catch(response => {
        console.error(response);
        alert('Something wasn\'t entered correctly');
      });
    }
  };

  return (
    <Container className='login-container'>
      <Row className='justify-content-sm-center'>
        <Col md={6}>
          <CardGroup>
            <Card className='registration-card'>
              <Card.Body>
                <Card.Header className='cardheader'>Register for myFlix</Card.Header>
                <Form className='has-validation'>
                <Form.Group className="mb-3" controlId="formBasicfirstname">
                    <Form.Label className='form-label'>Username:</Form.Label>
                    <Form.Control type="text" 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder='Enter Username(must be 5 character long)'
                      required
                    />
                    {usernameErr && <p>{usernameErr}</p>}
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='form-label'>Password:</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder='Password must be 6 characters long'
                      required
                      minLength="8" 
                    />
                    {passwordErr && <p>{passwordErr}</p>}
                  </Form.Group>  
          
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='form-label'>Email:</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='Please enter valid Email Address(abc@gmail.com)'
                      required
                    />
                     {emailErr && <p>{emailErr}</p>}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicBirthdate">
                    <Form.Label className='form-label'>Birthday:</Form.Label>
                    <Form.Control
                      type="date"
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                      required
                    />
                     {birthdayErr && <p>{birthdayErr}</p>}
                  </Form.Group>

                  <Button className='register-button' variant='success' type="submit" onClick={handleSubmit}>
                    Submit
                  </Button>
                  <p></p>
                  <p>Already registered <Link to={'/'}>Sign In</Link> here</p>
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
  })
};