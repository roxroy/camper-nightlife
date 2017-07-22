import React from 'react';
import Benefits from './Benefits';
import Hero from './Hero';
import Search from '../../containers/Search';

function Home() {
  return (
    <div className="home">
      <Hero />
      <Search />
      <Benefits />
    </div>
  )
}

export default Home;
