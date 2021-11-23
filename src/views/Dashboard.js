import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faUser } from '@fortawesome/free-solid-svg-icons';

import AccountBalance from '../components/AccountBalance';
import AccountPayments from '../components/AccountPayments';
import AccountHistory from '../components/AccountHistory';

import './Dashboard.scss';

const Dashboard = ({ className = false }) => {
	
	const [ activeLink, setActiveLink ] = useState(0);
	
	const links = [
		{ text: 'My Account', path: '/dashboard' },
		{ text: 'Payments', path: '/dashboard/payments' },
		{ text: 'History', path: '/dashboard/history' },
	];
	
	const data = {
		latestBalance: [
			{ date: '27/09', description: 'AMAZON 1158120', value: '-$88.64' },
			{ date: '21/09', description: 'GROCERY STORE 054841', value: '-$357.25' },
			{ date: '20/09', description: 'NETFLIX 015648', value: '-$12.99' },
			{ date: '15/09', description: 'PHARMACY 0518151', value: '-$36.87' },
			{ date: '15/09', description: 'PHARMACY 0592621', value: '-$49.11' },
		],
		futureBalance: [
			{ date: '29/09', description: 'VERIZON 05611215', value: '-$62.00' },
			{ date: '01/10', description: 'SPOTIFY 0619562', value: '-$14.99' },
			{ date: '06/10', description: 'AMAZON PRIME 0618177', value: '-$12.99' },
			{ date: '07/10', description: 'PAYMENT PLAN 051884', value: '-$599.98' },
			{ date: '07/10', description: 'YOUTUBE SUBS 0516132', value: '-$11.99' },
		],
		history: [
			'historico 1',
			'historico 2'
		]
	};

	return (
		<Container className={`dashboard py-5 ${className ? className : ''}`}>
			<Row>
				<Col xs={12} lg={4}>
					<Row className='align-items-center mb-5'>
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
							<h4>Angelica Cordeiro</h4>
							<p className='text-muted'>bank: 1234 c/c: 4321-5</p>
						</Col>
					</Row>

					<Row className=''>
						{links.map(({ text, path }, key) => (
							<Link className='dashboard__link' to={path} key={key}>
								<Button
									className={`dashboard__btn text-start ${key === activeLink ? 'dashboard__btn--active' : ''}`}
									variant='link'
									size='lg'
									block
									onClick={() => setActiveLink(key)}
								>
									{text}
								</Button>
							</Link>
						))}
					</Row>
				</Col>

				<Routes>
					<Route path='/1' element={<AccountBalance data={data} />} />
					<Route path='/' element={<AccountPayments />} />
					<Route path='/3' element={<AccountHistory data={data} />} />
				</Routes>
			</Row>
		</Container>
	);
};

export default Dashboard;
