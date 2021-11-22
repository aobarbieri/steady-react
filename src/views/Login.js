import React from 'react';
import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import logo from '../assets/logo.svg';
import './Login.scss';

const Login = () => (
	<section className='login'>
		<div className='login__container'>
			<Row>
				<Col className='text-center'>
					<Image src={logo} className='mb-5' height='90' />
					
					<Form>

						<Form.Group className='mb-3' controlId='formBasicEmail'>
							<Form.Label className='lead'>Username</Form.Label>
							<Form.Control type='text' />
						</Form.Group>

						<Form.Group className='mb-4' controlId='formBasicPassword'>
							<Form.Label className='lead'>Password</Form.Label>
							<Form.Control type='password' />
						</Form.Group>

						<Link to='/dashboard'>
							<Button variant='primary' type='submit' className=''>
								Submit
							</Button>
						</Link>

					</Form>
				</Col>
			</Row>
		</div>
	</section>
);

export default Login;
