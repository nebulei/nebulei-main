import React from 'react';

import Navbar from './components/CoreNavbar/index'
import Home from './containers/Home/index'
import Footer from './components/CoreFooter/index'


function App() {
  return (
      <>
      <Navbar/>        
        <Home />
      <Footer />
      </>
  );
}

export default App;
