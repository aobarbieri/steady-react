import React from 'react';
import { Row, Col, Container, Button, Image } from 'react-bootstrap';
import logo from '../assets/logo__steady-pay.svg';
import './Hero.scss';

const Hero = () => (
	<Container fluid className='hero text-center text-white'>
		<Row>
			<Col
				xs={12}
				md={6}
				className='text-md-end hero__steady-pay--logo mt-5'
			>
				<Image className='steady-pay--logo' src={logo} />
			</Col>
			<Col xs={12} md={6} className='text-md-start hero__content'>
				<p className='text-space'>Pay your bills on the go</p>
				<Button
					className='text-space text-nowrap'
					variant='outline-light'
				>
					Open an account
				</Button>
			</Col>
		</Row>
	</Container>
);

export default Hero;
