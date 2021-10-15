import React from 'react';
import './CreditCard.scss';
import { Image, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faCreditCard,
  faWallet,
  faMobileButton,
} from '@fortawesome/free-solid-svg-icons';
import creditCard from '../assets/credit-card.jpg';

const CreditCard = () => (
  <Container className="my-5">
    <Row>
      <Col xs={12} md={7} className="mb-5 mb-lg-0 px-5 px-md-0">
        <Row>
          <h2 className="mb-5 credit-card-title">Credit Card</h2>
        </Row>
        <Row>
          <Col xs={12} md={6} className="mb-4">
            <Row>
              <Col xs={2} className='d-flex justify-content-center'>
                <FontAwesomeIcon icon={faCreditCard} size='2x' color='#81e3ac'/>
              </Col>
              <Col xs={10} className="h5 text-muted">
                <p>Personal Credit</p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} className="mb-4">
            <Row>
              <Col xs={2} className='d-flex justify-content-center'>
                <FontAwesomeIcon icon={faCartShopping} size='2x' color='#81e3ac'/>
              </Col>
              <Col xs={10} className="h5 text-muted">
                <p>Online Payments</p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} className="mb-4">
            <Row>
              <Col xs={2} className='d-flex justify-content-center'>
                <FontAwesomeIcon icon={faMobileButton} size='2x' color='#81e3ac'/>
              </Col>
              <Col xs={10} className="h5 text-muted">
                <p>APP</p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} className="mb-4">
            <Row>
              <Col xs={2} className='d-flex justify-content-center'>
                <FontAwesomeIcon icon={faWallet} size='2x' color='#81e3ac'/>
              </Col>
              <Col xs={10} className="h5 text-muted">
                <p>Digital Wallet</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col xs={12} md={5}>
        <Image src={creditCard} alt="Credit Card Example" fluid />
      </Col>
    </Row>
  </Container>
);

export default CreditCard;
