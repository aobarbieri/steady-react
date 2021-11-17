import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const CenteredButton = ({ children, handleShow }) => (
	<Container className='d-flex justify-content-center'>
		<Button
			className='col-6 col-md-3 my-5 py-3 text-nowrap'
			variant='success'
			size='lg'
			onClick={handleShow}
		>
			{children}
		</Button>
	</Container>
);

export default CenteredButton;
