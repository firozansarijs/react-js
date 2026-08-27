import React from 'react'
import Button from '../components/Button'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
     <div className='h-screen w-1/2'>
     <h2 className='font-bold text-9xl mt-10 text-blue-300 px-5 hover:text-red-400 whitespace-nowrap hover:scale-105'>
      SPIDER MAN
     </h2>
     <br />
     <h2 className='font-bold text-9xl text-blue-300 px-9 hover:text-red-400 whitespace-nowrap hover:scale-105'>
      Marvel Clothing
     </h2>
     <p className='font-medium text-white px-10 mt-20 wrap-break-all  hover:text-gray-400 '>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sint magnam quasi earum! Magni voluptatum itaque minima voluptate placeat delectus, ut mollitia, ipsum tempora ipsam assumenda totam neque dicta in. Lorem ipsum dolor sit amet consectetur adipisicing elit. In, fuga modi.
     </p>
     <Button />
     </div>
    </div>
  )
}

export default Home