import React from 'react';
import render from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Search from './components/Search'
import About from './components/About'
import Database from './components/Database'
import Analytics from './components/Analytics'
import Map from './components/Map'
import './App.css';


function App(props) {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Search/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/database" element={<Database/>}/>
        <Route path="/analytics" element={<Analytics/>}/>
        <Route path="/map" element={<Map/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
