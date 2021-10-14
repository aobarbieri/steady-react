import React from 'react';
import { Row, Col, Container, Button, Image } from 'react-bootstrap';
import logo from '../assets/logo__steady-pay.svg';
import './Hero.scss';

const Hero = () => (
  <Container fluid className="hero text-center text-white">
    <Row>
      <Col className="text-md-end my-md-5 mt-5">
        <Image src={logo} />
      </Col>
      <Col className="text-md-start my-md-5 my-3">
        <p className="text-space">Pay your bills using our App</p>
        <Button className="text-space" variant="outline-light">
          Open your account
        </Button>
      </Col>
    </Row>
  </Container>
);

export default Hero;
