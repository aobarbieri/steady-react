import React from 'react';
import IconText from './IconText';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import {
	faMobileScreenButton,
	faMobileButton,
	faGlobe,
	faShieldVirus,
} from '@fortawesome/free-solid-svg-icons';

import './Institutional.scss';

const Institutional = () => (
	<section className='institutional text-light py-5'>
		<Container>
			<Row>
				<Col xs={12} md={5} />
				<Col xs={12} md={7}>
					<h2 className='institutional__title mb-5'>
						We were born digital
					</h2>
					<p className='mb-5 px-3 px-md-0'>
						Minim ad est proident in quis cillum cupidatat dolor.
						Labore minim cupidatat occaecat aliqua et dolore amet
						laboris deserunt consectetur et. Anim irure ad et
						incididunt anim cupidatat aliqua ullamco nisi et culpa
						aute sunt. Cillum officia consequat culpa consequat id
						officia duis ex adipisicing pariatur deserunt nisi
						consequat. Minim ad est proident in quis cillum
						cupidatat dolor. Labore minim cupidatat occaecat aliqua
						et dolore amet laboris deserunt consectetur et.
					</p>

					<Col className='px-2'>
						<IconText
							icon={faMobileScreenButton}
							color='#fff'
							className='mb-2'
						>
							No line and no bureaucracy
						</IconText>
						<IconText
							icon={faMobileButton}
							color='#fff'
							className='mb-2'
						>
							Practical and simple
						</IconText>
						<IconText icon={faGlobe} color='#fff' className='mb-2'>
							Open an account 100% online
						</IconText>
						<IconText
							icon={faShieldVirus}
							color='#fff'
							className='mb-2'
						>
							Safe online transactions
						</IconText>
					</Col>
					<Button variant='outline-light' className='mt-5'>
						Open an account
					</Button>
				</Col>
			</Row>
		</Container>
	</section>
);

export default Institutional;
