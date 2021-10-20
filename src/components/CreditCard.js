import React from 'react';
import IconText from './IconText';
import creditCard from '../assets/credit-card.jpg';

import { Image, Container, Row, Col } from 'react-bootstrap';
import {
	faCartShopping,
	faCreditCard,
	faWallet,
	faMobileButton,
} from '@fortawesome/free-solid-svg-icons';

import './CreditCard.scss';
import '../_variables.scss';

const CreditCard = () => (
	<Container className="my-5">
		<Row>
			<Col xs={12} md={7} className="mb-5 mb-lg-0 px-5 px-md-0">
				<Row>
					<h2 className="mb-5 text-muted credit-card-title">Credit Card</h2>
				</Row>

				<Row>
					<Col xs={12} md={6} className="mb-4">
						<IconText
							icon={faCreditCard}
							size="2"
							color="#05DF90"
							textClassName="h5 text-muted"
						>
							Personal Credit
						</IconText>
					</Col>

					<Col xs={12} md={6} className="mb-4">
						<IconText
							icon={faCartShopping}
							size="2"
							color="#05DF90"
							textClassName="h5 text-muted"
						>
							Online Shopping
						</IconText>
					</Col>

					<Col xs={12} md={6} className="mb-4">
						<IconText
							icon={faMobileButton}
							size="2"
							color="#05DF90"
							textClassName="h5 text-muted"
						>
							Mobile App
						</IconText>
					</Col>

					<Col xs={12} md={6} className="mb-4">
						<IconText
							icon={faWallet}
							size="2"
							color="#05DF90"
							textClassName="h5 text-muted"
						>
							Digital Wallet
						</IconText>
					</Col>
				</Row>
			</Col>
			<Col xs={12} md={5}>
				<Image src={creditCard} alt="Credit Card Example" fluid />
			</Col>
		</Row>
	</Container>
);

export default CreditCard;
