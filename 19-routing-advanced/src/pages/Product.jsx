import React from 'react'
import Searchproduct from '../components/Searchproduct';
import Navbar from '../components/Navbar';
const Product = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
        <h1 className='flex justify-center items-center font-bold text-2xl text-black underline hover:text-blue-300'>OUR COLLECTION</h1>
        <Searchproduct />
        
        </div>
  )
}

export default Product