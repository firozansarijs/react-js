import React from 'react'
import collage from "../photos/collage.png";

const Collection = () => {
  return (
    <div className='min-h-100 bg-[#dbd6d1]'>

      <p className='text-amber-600 flex py-10 justify-center items-center text-xs gap-2'>
        I N C R I B L E C O L L E C T I O N
      </p>

      <h1 className='text-black italic flex justify-center text-5xl'>
        Collection Live
      </h1>

      <p className='text-gray-400 flex justify-center py-3'>
        Lorem ipsum dolor sit amet. Lorem, ipsum dolor.
      </p>

      <div className='flex'>

       
        <div className='w-1/2 relative group overflow-hidden'>

          <img
            className='object-cover w-full h-full block transition-transform duration-700 group-hover:scale-105'
            src={collage}
            alt=""
          />

         
          <div className='
            absolute inset-0
            bg-black/30
            opacity-0
            group-hover:opacity-100
            transition-opacity duration-500
            flex items-center justify-center
          '>

            <p className='text-white text-2xl tracking-[4px]'>
              View Collection
            </p>

          </div>

        </div>

       <div className="w-1/2 h-full grid grid-cols-2 gap-1">
  <div className="relative group overflow-hidden">
    <img
      src="https://i.pinimg.com/1200x/9a/0c/89/9a0c89d9154610092226537b3489754f.jpg"
      className="w-full h-90 object-cover transition-transform duration-700 group-hover:scale-105"
      alt=""
    />

    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
      <p className="text-white text-xl tracking-[4px]">
        View Collection
      </p>
    </div>
  </div>
  <div className="relative group overflow-hidden">
    <img
      src="https://i.pinimg.com/736x/a1/8d/79/a18d79feaecf0796a5c464358f319b61.jpg"
      className="w-full h-90 object-cover transition-transform duration-700 group-hover:scale-105"
      alt=""
    />

    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
      <p className="text-white text-xl tracking-[4px]">
        View Collection
      </p>
    </div>
  </div>
  <div className="relative group overflow-hidden">
    <img
      src="https://i.pinimg.com/736x/a3/7f/6f/a37f6f5dd468a152afdaee4be6ac3100.jpg"
      className="w-full h-99 object-cover transition-transform duration-700 group-hover:scale-105"
      alt=""
    />

    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
      <p className="text-white text-xl tracking-[4px]">
        View Collection
      </p>
    </div>
  </div>

  <div className="relative group overflow-hidden">
    <img
      src="https://i.pinimg.com/736x/77/de/a6/77dea62e4153b5968ce551893a743a1f.jpg"
      className="w-full h-99 object-cover transition-transform duration-700 group-hover:scale-105"
      alt=""
    />

    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
      <p className="text-white text-xl tracking-[4px]">
        View Collection
      </p>
    </div>
  </div>

</div>

      </div>

    </div>
  )
}

export default Collection