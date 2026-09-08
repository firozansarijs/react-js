import React from 'react'
import { Heart } from "lucide-react";

const Trendingbox = (props) => {
  return (
    <div className='px-10 py-10'>
      
      <div className="bg-white h-150 w-100">
        
        <div className="relative group">

          <div className="bg-white h-7 w-25 absolute top-5 left-5 z-10">
            <h1 className='text-black font-extrabold flex items-center justify-center'>
              {props.text}
            </h1>
          </div>
          <Heart
            className='absolute top-5 right-5 z-10 bg-white h-10 w-10 rounded-full p-2 hover:bg-yellow-700 text-gray-300'
          />
          <img
            className="h-110 w-100 object-cover object-center"
            src={props.img}
            alt=""
          />

      <div className="absolute bottom-0 left-0 w-full h-13 bg-black text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-xs tracking-[4px] font-semibold">
            QUICK ADD TO BAG
             </p>
        </div>
        </div>
        <div className='px-5 py-5'>
        <p className='text-amber-900 text-s'>Spider collection</p>
        <h1 className='text-black font-bold'>{props.detail}</h1>
        <p className='text-gray-400 text-m'>${props.price}</p>
        <div className="flex gap-3 py-5 ">
         <div className="h-4 w-4 rounded-full bg-[#D8CCBB] hover:scale-95"></div>
         <div className="h-4 w-4 rounded-full bg-black hover:scale-95"></div>
         <div className="h-4 w-4 rounded-full bg-[#918778] hover:scale-95"></div>
         </div>
     </div>
      </div>

    </div>
  )
}

export default Trendingbox