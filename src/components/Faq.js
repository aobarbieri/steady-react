import React, { useState } from 'react';
import IconText from './IconText';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCreditCard,
	faWallet,
	faShieldAlt,
	faUserTie,
} from '@fortawesome/free-solid-svg-icons';

import './Faq.scss';

const Faq = () => {
	const options = [
		{ icon: faCreditCard, text: 'Credit and Debit Card' },
		{ icon: faWallet, text: 'Account' },
		{ icon: faShieldAlt, text: 'Digital Token' },
		{ icon: faUserTie, text: 'Services and Products' },
	];

	const [index, setIndex] = useState(0);

	const handleClick = (key) => {
		setIndex(key);
	};

	return (
		<section className='faq text-light'>
			<Container className='py-5'>
				<Row className='justify-content-center'>
					<h2 className='mb-5 mt-2 faq__title text-center'>FAQs</h2>
				</Row>
				<Row className='d-flex align-items-center'>
					<Col className='d-lg-none mb-3 ' xs={12}>
						<Row>
							{options.map(({ icon }, key) => (
								<Col
									className='d-flex justify-content-center'
									key={key}
								>
									<FontAwesomeIcon
										icon={icon}
										size='2x'
										color={key === index ? '#fff' : '#BBB'}
										onClick={() => handleClick(key)}
									/>
								</Col>
							))}
						</Row>

						<Row className='mt-5'>
							<p className='lead text-center'>
								{options[index].text}
							</p>
						</Row>
					</Col>

					<Col className='d-none d-lg-block'>
						{options.map(({ icon, text }, key) => (
							<IconText
								icon={icon}
								size={3}
								className='faq-clickable mb-3'
								textClassName='lead'
								color={key === index ? '#fff' : '#BBB'}
								onClick={() => handleClick(key)}
								key={key}
							>
								{text}
							</IconText>
						))}
					</Col>

					<Col>
						<Accordion defaultActiveKey='0' activeKey={`${index}`}>
							<Accordion.Item className='faq__item' eventKey='0'>
								<Accordion.Header>
									Credit and Debit Card
								</Accordion.Header>
								<Accordion.Body>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat. Duis aute irure
									dolor in reprehenderit in voluptate velit
									esse cillum dolore eu fugiat nulla pariatur.
									Excepteur sint occaecat cupidatat non
									proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item className='faq__item' eventKey='1'>
								<Accordion.Header>Account</Accordion.Header>
								<Accordion.Body>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat. Duis aute irure
									dolor in reprehenderit in voluptate velit
									esse cillum dolore eu fugiat nulla pariatur.
									Excepteur sint occaecat cupidatat non
									proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item className='faq__item' eventKey='2'>
								<Accordion.Header>
									Digital Token
								</Accordion.Header>
								<Accordion.Body>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat. Duis aute irure
									dolor in reprehenderit in voluptate velit
									esse cillum dolore eu fugiat nulla pariatur.
									Excepteur sint occaecat cupidatat non
									proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item className='faq__item' eventKey='3'>
								<Accordion.Header>
									Services and Products
								</Accordion.Header>
								<Accordion.Body>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat. Duis aute irure
									dolor in reprehenderit in voluptate velit
									esse cillum dolore eu fugiat nulla pariatur.
									Excepteur sint occaecat cupidatat non
									proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Faq;
