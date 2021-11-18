import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.scss';
import { Navbar, Nav, ButtonGroup, Button, Container, NavDropdown } from 'react-bootstrap';
import logo from '../assets/logo.svg';

const Navigation = ({ handleShow }) => (
	<Navbar bg='light' expand='lg'>
		<Container>
			<Navbar.Brand href='#home'>
				<Link to='/'>
					<img src={logo} height='40' className='d-inline-block align-top' alt='Steady logo' />
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='mr-auto flex-grow-1'>
					<Nav.Link href='#card'>Card</Nav.Link>
					<Nav.Link href='#about'>About us</Nav.Link>
					<Nav.Link href='#faq'>FAQ</Nav.Link>
				</Nav>
				<ButtonGroup aria-label='Basic example'>
					<Button variant='outline-secondary'>
						<NavDropdown title='Log in' id='basic-nav-dropdown'>
							<NavDropdown.Item>
								<Link to='/login'>Personal</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link to='/login'>Business</Link>
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item>Separated link</NavDropdown.Item>
						</NavDropdown>
					</Button>
					<Button variant='outline-secondary' onClick={handleShow}>
						Open an account
					</Button>
				</ButtonGroup>
			</Navbar.Collapse>
		</Container>
	</Navbar>
);

export default Navigation;
