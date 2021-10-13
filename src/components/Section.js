import React from 'react';
import './Section.scss';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faCreditCard,
  faWallet,
  faMobileButton,
} from '@fortawesome/free-solid-svg-icons';
import creditCard from '../assets/credit-card.jpg';

const Section = () => (
  <Container fluid>
    <Row>
      <Col md={6}>
        <h1>Credit Card</h1>
        <Row>
          <Col md>
            <FontAwesomeIcon icon={faCreditCard} />
            <p>Personal Credit</p>
          </Col>
          <Col md>
            <FontAwesomeIcon icon={faCartShopping} />
            <p>Online Payments</p>
          </Col>
        </Row>
        <Row>
          <Col md>
            <FontAwesomeIcon icon={faMobileButton} />
            <p>APP</p>
          </Col>
          <Col md>
            <FontAwesomeIcon icon={faWallet} />
            <p>Digital Wallet</p>
          </Col>
        </Row>
      </Col>
      <Col md={6}>
        <Card.Img src={creditCard} alt="Credit card example" />
      </Col>
    </Row>
  </Container>
);

export default Section;
