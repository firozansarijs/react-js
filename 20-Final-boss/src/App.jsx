import React from 'react'
import Nav from './components/Nav'
import Home from './pages/Home';
import TrendingPage from './pages/Trending';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Trending from './pages/Trending';


const App = () => {
  return (
    <div className=''>
      <Nav />
    <section id="home">
    <Home />
  </section>

  <section id="trending">
    <TrendingPage />
  </section>

  <section id="collection">
    <Collection />
  </section>

  <section id="about">
    <About />
  </section>

  <section id="contact">
    <Contact />
  </section>

    </div>
  )
}

export default App