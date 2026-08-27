import React from 'react'
import Myimage from '../assets/Myimage.png'
import Leftside from '../components/Leftside'
import Rightside from '../components/Rightside'
import Navbar from '../components/Navbar'


const Contact = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
    <h1 className=' p-7 justify-center flex items-center underline text-black  hover:text-red-400 whitespace-nowrap text-2xl font-bold'>CONTACT US</h1>
    <div className="flex justify-between gap-10 px-10">
    <div className="w-1/3">
        <Leftside />
    </div>
    <div className="w-1/2">
        <Rightside />
    </div>
    </div>
      </div>
  )
}

export default Contact