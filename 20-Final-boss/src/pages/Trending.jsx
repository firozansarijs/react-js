import React from 'react'
import Trendingbox from '../components/Trendingbox'

const Trending = () => {
  return (
    <div className='min-h-100 min-w-screen bg-[#F5F0EB]'>
         <p className='text-amber-600 flex py-20 justify-center items-center text-xs gap-2'>
          W h a t ' s
          <span>
            H o t
            </span> 
            </p>
            <h1 className='text-black italic flex justify-center text-5xl'>Trending Now</h1>
            <p className='text-gray-400 flex justify-center mt-6 '>The most coveted pieces of the season, handpicked by our style experts</p>
            <div className=' grid grid-cols-3 gap-6'>
            <Trendingbox  img = "https://i.pinimg.com/736x/12/7b/4b/127b4b72191f2a1a6c785e9d856f876d.jpg" text = "NEW"/>
            <Trendingbox  img = "https://i.pinimg.com/736x/86/44/b5/8644b5c847d18e7479e542d0b6bf62e9.jpg" text = "LIMTED"/>
            <Trendingbox  img = "https://i.pinimg.com/736x/5e/04/d3/5e04d38fa01fd8db4bfd694c86eefc64.jpg" text = "BESTSELLER"/>
            </div>
    </div>
  )
}

export default Trending