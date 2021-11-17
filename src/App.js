import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CreditCard from './components/CreditCard';
import CardList from './components/CardList';
import CenteredButton from './components/CenteredButton';
import Institutional from './components/Institutional';
import Faq from './components/Faq';
import Footer from './components/Footer';
import AccountModal from './components/AccountModal';

import posts from './data/posts';
import './App.scss';

const App = () => {
	const [show, setShow] = useState(false);

	return (
		<div className='App'>
			<Navigation handleShow={() => setShow(true)} />
			<Hero />

			<CreditCard />
			<CardList posts={posts} />
			<CenteredButton handleShow={() => setShow(true)} >
				Open an account
			</CenteredButton>

			<Institutional />
			<Faq />
			<Footer />
			<AccountModal
				show={show}
				handleClose={() => setShow(false)}
			/>
		</div>
	);
};

export default App;
