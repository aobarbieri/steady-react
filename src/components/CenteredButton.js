import React from 'react';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const CenteredButton = ({ children, handleShow }) => (
	<Row className='d-flex justify-content-center'>
		<Button
			className='col-6 col-md-3 my-5 py-3 text-nowrap'
			variant='success'
			size='lg'
			onClick={handleShow}
		>
			{children}
		</Button>
	</Row>
);

export default CenteredButton;
