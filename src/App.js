import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AccountModal from './components/AccountModal';

import Home from './views/Home';
import Login from './views/Login';

import './App.scss';

const App = () => {
	const [show, setShow] = useState(false);

	return (
		<div>
			<Navigation handleShow={() => setShow(true)} />

			<Routes>
				<Route path='/' element={<Home handleClick={() => setShow(true)} />} />

				<Route path='/login' element={<Login />} />
			</Routes>

			<Footer />
			<AccountModal show={show} handleClose={() => setShow(false)} />
		</div>
	);
};

export default App;
