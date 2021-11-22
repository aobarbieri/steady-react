import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faUser } from '@fortawesome/free-solid-svg-icons';

import './Dashboard.scss';

const Dashboard = () => {
	const latestData = [
		{ date: '27/09', description: 'AMAZON 1158120', value: '-$88.64' },
		{ date: '21/09', description: 'GROCERY STORE 054841', value: '-$357.25' },
		{ date: '20/09', description: 'NETFLIX 015648', value: '-$12.99' },
		{ date: '15/09', description: 'PHARMACY 0518151', value: '-$36.87' },
		{ date: '15/09', description: 'PHARMACY 0592621', value: '-$49.11' },
	];

	const futureData = [
		{ date: '29/09', description: 'VERIZON 05611215', value: '-$62.00' },
		{ date: '01/10', description: 'SPOTIFY 0619562', value: '-$14.99' },
		{ date: '06/10', description: 'AMAZON PRIME 0618177', value: '-$12.99' },
		{ date: '07/10', description: 'PAYMENT PLAN 051884', value: '-$599.98' },
		{ date: '07/10', description: 'YOUTUBE SUBS 0516132', value: '-$11.99' },
	];

	return (
		<Container className='dashboard py-5'>
			<Row>
				<Col xs={12} lg={4}>
					<Row className='mb-5'>
						<Col xs={3}>
							<span className='dashboard__user-avatar'>
								<FontAwesomeIcon icon={faCircle} size='5x' color='#f8f9fa' />
								<FontAwesomeIcon
									className='dashboard__user-icon'
									icon={faUser}
									size='3x'
									color='#7c7d7d'
								/>
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
					<h6>
						<small>
							<strong>Available to Spend</strong>
						</small>
					</h6>
					<h4 className='text-success mb-4'>
						<small>$ </small>3,500<small>.00</small>
					</h4>
					<h6>
						<small>
							<strong>Special Credit</strong>
						</small>
					</h6>
					<p className='mb-0'>Available Amount</p>
					<p className='mb-4'>$ 5,000.00</p>
					<Button variant='secondary'>View Transactions</Button>
				</Col>

				<Col xs={12} lg={5} className='mt-5 pt-lg-5'>
					<Tabs className='mt-lg-5 pt-lg-5' defaultActiveKey='latest'>
						<Tab eventKey='latest' title='Transactions'>
							<Table className='dashboard_table' striped borderless>
								<thead>
									<tr>
										<th>Date</th>
										<th>Description</th>
										<th>Amount</th>
									</tr>
								</thead>
								<tbody>
									{latestData.map(({ date, description, value }) => (
										<tr>
											<td>{date}</td>
											<td>{description}</td>
											<td>{value}</td>
										</tr>
									))}
								</tbody>
							</Table>
						</Tab>

						<Tab eventKey='future' title='Upcoming Charges'>
							<Table className='dashboard_table' striped borderless>
							<thead>
									<tr>
										<th>Date</th>
										<th>Description</th>
										<th>Amount</th>
									</tr>
								</thead>
								<tbody>
									{futureData.map(({ date, description, value }) => (
										<tr>
											<td>{date}</td>
											<td>{description}</td>
											<td>{value}</td>
										</tr>
									))}
								</tbody>
							</Table>
						</Tab>
					</Tabs>
				</Col>
			</Row>
		</Container>
	);
};

export default Dashboard;
