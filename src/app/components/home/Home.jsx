import React from 'react';
import Benefits from './Benefits';
import Hero from './Hero';

function Home() {
  return (
    <div className="home">
      <Hero />
      <Benefits className="container" />
    </div>
  )
}

export default Home;
