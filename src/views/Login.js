import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import logo from '../assets/logo.svg';
import './Login.scss';

const Login = ({ auth }) => {
	const [name, setName] = useState();
	const [account, setAccount] = useState();
	let navigate = useNavigate();

	const handleSubmit = () => {
		auth.login(name, account, navigate('/dashboard'));
	};

	return (
		<section className='login'>
			<div className='login__container'>
				<Row>
					<Col className='text-center'>
						<Image src={logo} className='mb-5' height='90' />

						<Form>
							<Form.Group className='mb-3' controlId='formBasicName'>
								<Form.Label className='lead'>Full Name</Form.Label>
								<Form.Control
									type='text'
									value={name}
									onChange={(e) => setName(e.currentTarget.value)}
								/>
							</Form.Group>

							<Form.Group className='mb-3' controlId='formBasicAccountNumber'>
								<Form.Label className='lead'>Account Number</Form.Label>
								<Form.Control
									type='number'
									value={account}
									onChange={(e) => setAccount(e.currentTarget.value)}
								/>
							</Form.Group>

							<Form.Group className='mb-4' controlId='formBasicPassword'>
								<Form.Label className='lead'>Password</Form.Label>
								<Form.Control type='password' />
							</Form.Group>

							<Button variant='primary' type='submit' onClick={handleSubmit}>
								Submit
							</Button>
						</Form>
					</Col>
				</Row>
			</div>
		</section>
	);
};

export default Login;
