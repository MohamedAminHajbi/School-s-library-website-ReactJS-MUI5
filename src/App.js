import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catalog from './components/Catalog';
import Login from './components/Login';
import  Home  from './components/Home';
import Footer from './components/Footer';
import Register from './components/Register';
function App() {
  
  return (
    <div>
      <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      <Footer/>
     
      
    </div>
    
  );
}

export default App;
