import React from 'react'
import webGif from '../photos/web.gif'

const Home = () => {
  return (
    <div>
      <div className="w-full h-[calc(100vh-80px)] bg-[#5c0101] flex justify-center overflow-hidden">
            <div className="absolute left-12 top-1/2 -translate-y-1/2">
             <p className='font-semibold text-amber-400 mb-10'>S P I D E R  C O L L E C T I O N | B U Y N O W</p>
            <h1 className="text-7xl font-bold text-white">UNLEASH</h1>
            <br />
            <h1 className="text-7xl font-bold text-amber-600 ml-10 mb-7">YOUR STYLE</h1>
            <p className='font-bold text-2xl text-white'>Bold streetwear for a new generation. You also <br /> Explore our collection</p>
            <div className='mt-20'>
            <button className='bg-amber-700 mr-20 h-15 w-70 text-1xl font-bold  text-white hover:bg-black'>SHOP COLLECTION →</button>
            <button className='border-1 mr-20 h-15 w-70 text-1xl font-bold  text-white hover:bg-white hover:text-black'>View Lookbook →</button>
            </div>
               </div>
          <img
           className="h-[calc(100vh-74px)] w-full object-cover"
           src={webGif} alt="Spider-Man collection" />
           </div>
       <div className="bg-black h-20 text-gray-400 text-2xl flex overflow-hidden items-center">
  
  <div className="marquee flex whitespace-nowrap shrink-0">

    <div className="flex items-center gap-10 shrink-0">
      <span>SPIDER ESSENTIALS</span>
      <span>•</span>
      <span>CONTEMPORARY SILHOUETTES</span>
      <span>•</span>
      <span>TIMELESS ELEGANCE</span>
      <span>•</span>
      <span>SUSTAINABLE LUXURY</span>
    </div>

    <div className="flex items-center gap-10 shrink-0">
      <span>SPIDER ESSENTIALS</span>
      <span>•</span>
      <span>CONTEMPORARY SILHOUETTES</span>
      <span>•</span>
      <span>TIMELESS ELEGANCE</span>
      <span>•</span>
      <span>SUSTAINABLE LUXURY</span>
    </div>

  </div>

</div>
    </div>
  )
}

export default Home