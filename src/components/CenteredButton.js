import React from 'react';
import { Row, Button } from 'react-bootstrap';

const CenteredButton = ({ children }) => (
	
		<Row className="d-flex justify-content-center">
			<Button
				className="col-6 col-md-3 my-5 py-3 text-nowrap"
				variant="success"
				size="lg"
			>
				{children}
			</Button>
		</Row>
	
);

export default CenteredButton;
