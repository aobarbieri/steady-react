import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faUser } from '@fortawesome/free-solid-svg-icons';

import './Dashboard.scss';

const Dashboard = () => (
	<Container className='dashboard py-5'>
		<Row>
			<Col xs={12} lg={4}>
				<Row className='mb-5'>
					<Col xs={3}>
						<span className='dashboard__user-avatar'>
							<FontAwesomeIcon icon={faCircle} size='5x' color='#f8f9fa' />
							<FontAwesomeIcon className='dashboard__user-icon' icon={faUser} size='3x' color='#7c7d7d' />
						</span>
					</Col>
					<Col xs={9}>
						<h4>Amanda Mitzian</h4>
						<p className='text-muted'>bank: 1234 c/c: 4321-5</p>
					</Col>
				</Row>
				<Row>
					<Button className='dashboard__btn text-start' variant='link' size='lg' block>
						My Account
					</Button>
					<Button className='dashboard__btn text-start' variant='link' size='lg' block>
						Payments
					</Button>
					<Button className='dashboard__btn text-start' variant='link' size='lg' block>
						My Account
					</Button>
				</Row>
			</Col>

			<Col xs={12} lg={3} className='mt-lg-5 pt-lg-4'>
				<h3 className='my-5'>Checking Account</h3>
				<h6><small><strong>Available to Spend</strong></small></h6>
				<h4 className='text-success mb-4'>
					<small>$ </small>3,500<small>.00</small>
				</h4>
				<h6><small><strong>Special Credit</strong></small></h6>
				<p className='mb-0'>Available Amount</p>
				<p className='mb-4'>$ 5,000.00</p>
				<Button variant='secondary'>View Transactions</Button>
			</Col>

			<Col xs={12} lg={5}></Col>
		</Row>
	</Container>
);

export default Dashboard;
