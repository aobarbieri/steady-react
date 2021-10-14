import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CreditCard from './components/CreditCard';
import CardList from './components/CardList';

import './App.scss';

const App = () => (
    <div className="App">
      <Navigation />
      <Hero />
      <CreditCard />

      <CardList />
    </div>
);


export default App;
