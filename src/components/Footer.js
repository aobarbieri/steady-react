import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookSquare,
	faTwitter,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import logo from '../assets/logo.svg';
import applestore from '../assets/applestore.png';
import googleplay from '../assets/googleplay.png';

import './Footer.scss';

const Footer = () => (
	<footer className="footer">
		<Container>
			<Row className="text-center py-5">
				<Col xs={12} lg={5} className="text-lg-start">
					<Image src={logo} height="50" />
				</Col>

				<Col xs={12} lg={5}>
					<Image src={applestore} />
					<Image src={googleplay} className="ms-2" />
				</Col>

				<Col
					xs={12}
					lg={2}
					className="d-flex align-items-center justify-content-center"
				>
					<a
						href="http://facebook.com/"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon
							icon={faFacebookSquare}
							color="#7c7c7c"
							size="2x"
						/>
					</a>
					<FontAwesomeIcon
						icon={faTwitter}
						color="#7c7c7c"
						size="2x"
						className="ms-2"
					/>
					<FontAwesomeIcon
						icon={faYoutube}
						color="#7c7c7c"
						size="2x"
						className="ms-2"
					/>
				</Col>
			</Row>
		</Container>
	</footer>
);

export default Footer;
