import React from 'react'
import {Route,Routes} from 'react-router'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Notfoundpage from './pages/Notfoundpage'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'



const App = () => {
  return (
    <div className='h-screen bg-black  text-white'>
      <Routes>
        <Route  path='/collection' element = {<Home />} />
        <Route  path='/trending' element = {<About />} />
        <Route  path='/contact' element = {<Contact />} />
        <Route  path='/about' element = {<Product />} />
        <Route  path='*' element = {<Notfoundpage />} />
      </Routes>
      <Section1 />
      <Section2 />
      <Section3 />
      </div>
  )
}

export default App