import React from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';

const AccountBalance = ({ data }) => {
	const { latestBalance, futureBalance } = data;

	return (
		<>
			<Col xs={12} lg={3} className='px-5 px-lg-0 mt-lg-5 pt-lg-4'>
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
				<Button variant='secondary'>View Statement</Button>
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
								{latestBalance.map(({ date, description, value }) => (
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
								{futureBalance.map(({ date, description, value }) => (
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
		</>
	);
};

export default AccountBalance;
