import React from 'react';

import Navbar from  './components/Navbar/index'
import Home from './containers/Home/index';
import Footer from './components/Footer/Footer';


function App() {
  return (
      <>
      <div id={`App`}>

      <Navbar />
        <Home />
      <Footer />
      
      </div>
      </>
  );
}

export default App