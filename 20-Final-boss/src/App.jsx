import React from 'react'
import { Routes, Route } from "react-router-dom";
import Nav from './components/Nav'
import Home from './pages/Home';
import TrendingPage from './pages/Trending';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div className=''>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App