import React from 'react'
import AboutWhy from '../components/AboutWhy'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <h1 className='p-10 font-bold text-2xl mt-10 text-blue-300 hover:text-red-400'>
        OUR STORY
        </h1>
        <p className='ml-10 font-bold'>
          Founded in 2026
          <br />
          SpidyStore was created for Marvel fans who love premium Spider-Man fashion.
        </p>
        <div>
          <h1 className='p-10 font-bold text-2xl  text-blue-300 hover:text-red-400'>
            OUR MISSION
          </h1>
          <p className='ml-10  font-bold'>
            Deliver high-quality Spider-Man clothing worldwide.
          </p>
        </div>
        <div>
          <h1 className='p-10 font-bold text-2xl  text-blue-300 hover:text-red-400'>WHY CHOOSE US?</h1>
          <AboutWhy />
        </div>
      </div>
  )
}

export default About