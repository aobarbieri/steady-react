import React from 'react';
import './Navigation.scss';
import { Navbar, Nav, ButtonGroup, Button, Container, NavDropdown } from 'react-bootstrap';
import logo from '../assets/logo.svg';

const Navigation = () => (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <img
                src= {logo}
                height="40"
                className="d-inline-block align-top"
                alt="Steady logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto flex-grow-1">
                    <Nav.Link href="#card">Card</Nav.Link>
                    <Nav.Link href="#about">About us</Nav.Link>
                    <Nav.Link href="#faq">FAQ</Nav.Link>
                </Nav>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="outline-secondary">
                        <NavDropdown title="Log in" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Button>
                    <Button variant="outline-secondary">Open an account</Button>     
                </ButtonGroup>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Navigation;