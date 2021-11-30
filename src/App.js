import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AccountModal from './components/AccountModal';

import Home from './views/Home';
import Login from './views/Login';
import Dashboard from './views/Dashboard';

import './App.scss';

const App = () => {
	const [show, setShow] = useState(false);
	const [name, setName] = useState();
	const [account, setAccount] = useState();
	const isLogged = name && account;

	const fakeAuth = {
		login(name, cb) {
			setName(name);
			setAccount(account);
			setTimeout(cb, 100);
		},
		logout(cb) {
			setName();
			setAccount();
			setTimeout(cb, 100);
		},
	};

	return (
		<div>
			<Navigation handleShow={() => setShow(true)} />

			<Routes>
				<Route path='/' element={<Home handleClick={() => setShow(true)} />} />
				<Route path='/login' element={<Login auth={fakeAuth} />} />
				<Route path='/dashboard' element={<Dashboard name={name} account={account} />} />
			</Routes>

			<Footer />
			<AccountModal show={show} handleClose={() => setShow(false)} />
		</div>
	);
};

export default App;
