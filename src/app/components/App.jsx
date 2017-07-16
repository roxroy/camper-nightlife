import React, { PropTypes } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';

function App({ children }) {
  return (
    <div>
      <Header />
      <main className="container">
      	{children}
      </main>
      <Footer />
    </div>
  );
}

App.propTypes = { children: PropTypes.object };

export default App;
