import React from 'react';
import IconText from './IconText';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCreditCard,
	faWallet,
	faShieldVirus,
	faUserTie,
} from '@fortawesome/free-solid-svg-icons';

import './Faq.scss';

const Faq = () => (
	<section className="faq text-light">
		<Container className="py-5">
			<Row className="d-flex align-items-center">
				<Col className="d-lg-none mb-5" xs={12}>
					<Row>
						<Col className="d-flex justify-content-center">
							<FontAwesomeIcon icon={faCreditCard} size="2x" />
						</Col>
						<Col className="d-flex justify-content-center">
							<FontAwesomeIcon icon={faWallet} size="2x" />
						</Col>
						<Col className="d-flex justify-content-center">
							<FontAwesomeIcon icon={faShieldVirus} size="2x" />
						</Col>
						<Col className="d-flex justify-content-center">
							<FontAwesomeIcon icon={faUserTie} size="2x" />
						</Col>
					</Row>
				</Col>
				<Col className="d-none d-lg-block">
					<IconText
						icon={faCreditCard}
						size={3}
						className="mb-3"
						textClassName="lead"
						color="#fff"
					>
						Credit and debit card
					</IconText>
					<IconText
						icon={faWallet}
						size={3}
						className="mb-3"
						textClassName="lead"
						color="#fff"
					>
						Account
					</IconText>
					<IconText
						icon={faShieldVirus}
						size={3}
						className="mb-3"
						textClassName="lead"
						color="#fff"
					>
						Digital Token
					</IconText>
					<IconText
						icon={faUserTie}
						size={3}
						textClassName="lead"
						color="#fff"
					>
						Services and products
					</IconText>
				</Col>

				<Col>
					<Accordion defaultActiveKey="0">
						<Accordion.Item className='faq__item' eventKey="0">
							<Accordion.Header>
								Accordion Item #1
							</Accordion.Header>
							<Accordion.Body>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum
								dolore eu fugiat nulla pariatur. Excepteur sint
								occaecat cupidatat non proident, sunt in culpa
								qui officia deserunt mollit anim id est laborum.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item className='faq__item' eventKey="1">
							<Accordion.Header>
								Accordion Item #2
							</Accordion.Header>
							<Accordion.Body>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum
								dolore eu fugiat nulla pariatur. Excepteur sint
								occaecat cupidatat non proident, sunt in culpa
								qui officia deserunt mollit anim id est laborum.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item className='faq__item' eventKey="2">
							<Accordion.Header>
								Accordion Item #3
							</Accordion.Header>
							<Accordion.Body>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum
								dolore eu fugiat nulla pariatur. Excepteur sint
								occaecat cupidatat non proident, sunt in culpa
								qui officia deserunt mollit anim id est laborum.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item className='faq__item' eventKey="3">
							<Accordion.Header>
								Accordion Item #4
							</Accordion.Header>
							<Accordion.Body>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum
								dolore eu fugiat nulla pariatur. Excepteur sint
								occaecat cupidatat non proident, sunt in culpa
								qui officia deserunt mollit anim id est laborum.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
			</Row>
		</Container>
	</section>
);

export default Faq;
