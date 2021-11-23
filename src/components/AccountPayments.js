import React from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';

const AccountPayments = ({ data }) => (
	<Col xs={12} lg={8} className='mt-5 pt-lg-5'>
		<h3 className='my-4'>Payments</h3>
		<Tabs className='mt-5 pt-lg-5' defaultActiveKey='invoices'>
			<Tab eventKey='invoices' title='Invoices'>
				<Form>
					<Form.Group controlId='formCode' className='my-5'>
						<Form.Label>Invoice Barcode Number</Form.Label>
						<Form.Control type='number' placeholder='Enter barcode number' />
					</Form.Group>

					<Form.Group controlId='formPaymentType' className='my-5'>
						<Form.Label>Payment Type</Form.Label>
						<div className='d-flex'>
							<Form.Check
								type='radio'
								id='card'
								label='Debit or Credit Card'
								name='paymentType'
								className='me-4'
							/>
							<Form.Check type='radio' id='wire' label='Wire Transfer' name='paymentType' />
						</div>
					</Form.Group>
					<Button variant='success'>Continue</Button>
				</Form>
			</Tab>

			<Tab eventKey='transfer' title='Transfer Funds'></Tab>
		</Tabs>
	</Col>
);

export default AccountPayments;
