import React from 'react';
import IconText from './IconText';

import { Container, Row, Col, Button } from 'react-bootstrap';
import {
  faMobileScreenButton,
  faMobileButton,
  faGlobe,
  faShieldVirus,
} from '@fortawesome/free-solid-svg-icons';

import './Institutional.scss';

const Institutional = () => (
  <section className="institutional text-light py-5">
    <Container>
      <Row>
        <Col xs={12} md={5} />
        <Col xs={12} md={7}>
          <h2>We were born digital</h2>
          <p>
            Minim ad est proident in quis cillum cupidatat dolor. Labore minim
            cupidatat occaecat aliqua et dolore amet laboris deserunt
            consectetur et. Anim irure ad et incididunt anim cupidatat aliqua
            ullamco nisi et culpa aute sunt. Cillum officia consequat culpa
            consequat id officia duis ex adipisicing pariatur deserunt nisi
            consequat. Minim ad est proident in quis cillum cupidatat dolor.
            Labore minim cupidatat occaecat aliqua et dolore amet laboris
            deserunt consectetur et.
          </p>
          <Col>
            <IconText icon={faMobileScreenButton} color="#fff">
              No line and no bureaucracy
            </IconText>
            <IconText icon={faMobileButton} color="#fff">
              Practical and simple
            </IconText>
            <IconText icon={faGlobe} color="#fff">
              Open an account 100% online
            </IconText>
            <IconText icon={faShieldVirus} color="#fff">
              Safe online transactions
            </IconText>
          </Col>
          <Button variant="outline-light">Open an account</Button>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Institutional;
