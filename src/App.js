import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CreditCard from './components/CreditCard';
import CardList from './components/CardList';
import CenteredButton from './components/CenteredButton';

import posts from './data/posts';
import './App.scss';

const App = () => (
    <div className="App">
      <Navigation />
      <Hero />
      <CreditCard />
      <CardList posts={posts} />
      <CenteredButton>Open your account</CenteredButton>
    </div>
);


export default App;
