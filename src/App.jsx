import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Pages/Home';
import { Routes, Route } from 'react-router-dom';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import SignUp from './components/Pages/SignUp';
import Trailer from './components/Pages/Trailer';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Products />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/trailer' element={<Trailer />} />
      </Routes>
    </>
  );
}

export default App;