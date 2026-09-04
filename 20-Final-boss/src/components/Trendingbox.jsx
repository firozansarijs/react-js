import React from 'react'
import { Heart } from "lucide-react";

const Trendingbox = (props) => {
  return (
    <div className='px-10 py-10'>
      
      <div className="bg-white h-150 w-100">
        
        <div className="relative">

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

        </div>

      </div>

    </div>
  )
}

export default Trendingbox