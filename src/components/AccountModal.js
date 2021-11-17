import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AccountModal = ({ show, handleClose }) => (
	<Modal show={show} onHide={handleClose}>
		<Modal.Header closeButton>
			<Modal.Title>Open an account</Modal.Title>
		</Modal.Header>
		<Modal.Body>
			<Form>
				<Form.Group className='mx-md-3 mb-3' controlId='formGridName'>
					<Form.Label>Name</Form.Label>
					<Form.Control type='text' placeholder='Enter name' />
				</Form.Group>

				<Form.Group className='mx-md-3 mb-3'controlId='formGridEmail'>
					<Form.Label>Email</Form.Label>
					<Form.Control type='email' placeholder='Enter email' />
					<Form.Text className='text-muted'>
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className='mx-md-3 mb-3' controlId='formgridCity'>
					<Form.Label>City</Form.Label>
					<Form.Control />
				</Form.Group>

				<Form.Group className='mx-md-3 mb-3' controlId='formBasicState'>
					<Form.Label>State</Form.Label>
					<Form.Select defaultValue='Choose...'>
						<option>Choose...</option>
						<option value='AL'>Alabama</option>
						<option value='AK'>Alaska</option>
						<option value='AZ'>Arizona</option>
						<option value='AR'>Arkansas</option>
						<option value='CA'>California</option>
						<option value='CO'>Colorado</option>
						<option value='CT'>Connecticut</option>
						<option value='DE'>Delaware</option>
						<option value='DC'>District Of Columbia</option>
						<option value='FL'>Florida</option>
						<option value='GA'>Georgia</option>
						<option value='HI'>Hawaii</option>
						<option value='ID'>Idaho</option>
						<option value='IL'>Illinois</option>
						<option value='IN'>Indiana</option>
						<option value='IA'>Iowa</option>
						<option value='KS'>Kansas</option>
						<option value='KY'>Kentucky</option>
						<option value='LA'>Louisiana</option>
						<option value='ME'>Maine</option>
						<option value='MD'>Maryland</option>
						<option value='MA'>Massachusetts</option>
						<option value='MI'>Michigan</option>
						<option value='MN'>Minnesota</option>
						<option value='MS'>Mississippi</option>
						<option value='MO'>Missouri</option>
						<option value='MT'>Montana</option>
						<option value='NE'>Nebraska</option>
						<option value='NV'>Nevada</option>
						<option value='NH'>New Hampshire</option>
						<option value='NJ'>New Jersey</option>
						<option value='NM'>New Mexico</option>
						<option value='NY'>New York</option>
						<option value='NC'>North Carolina</option>
						<option value='ND'>North Dakota</option>
						<option value='OH'>Ohio</option>
						<option value='OK'>Oklahoma</option>
						<option value='OR'>Oregon</option>
						<option value='PA'>Pennsylvania</option>
						<option value='RI'>Rhode Island</option>
						<option value='SC'>South Carolina</option>
						<option value='SD'>South Dakota</option>
						<option value='TN'>Tennessee</option>
						<option value='TX'>Texas</option>
						<option value='UT'>Utah</option>
						<option value='VT'>Vermont</option>
						<option value='VA'>Virginia</option>
						<option value='WA'>Washington</option>
						<option value='WV'>West Virginia</option>
						<option value='WI'>Wisconsin</option>
						<option value='WY'>Wyoming</option>
					</Form.Select>
				</Form.Group>

				<Form.Group className='mx-md-3' controlId='formGridZip'>
					<Form.Label>Zip</Form.Label>
					<Form.Control />
				</Form.Group>

				<Form.Group className='mx-md-3 mb-2' id='formGridCheckbox'>
					<Form.Check
						type='checkbox'
						label='I agree to the Terms and Conditions'
					/>
				</Form.Group>
			</Form>
		</Modal.Body>
		<Modal.Footer>
			<Button variant='secondary' onClick={handleClose}>
				Cancel
			</Button>
			<Button variant='primary' onClick={handleClose}>
				Submit
			</Button>
		</Modal.Footer>
	</Modal>
);

export default AccountModal;
