import React from 'react';
import { Route, Routes } from "react-router-dom"

import * as ROUTES from './constants/routes';

import Navbar from './components/Navbar/index'
import Home from './containers/Home';
import NotFound from './containers/Core/404'
import Footer from './components/Footer/index'



function App() {
  return (
    <div id='App'>

      <Navbar />

      <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App