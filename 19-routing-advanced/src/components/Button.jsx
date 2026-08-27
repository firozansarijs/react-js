import React from 'react'

const Button = () => {
  return (
    <div className='flex flex-row gap-20' >
        <button className=' bg-violet-400 justify-center ml-15 mt-25 h-10 w-40 rounded-full text-nowrap items-center flex  hover:bg-red-400 hover:scale-105 cursor-pointer active:scale-95 font-bold text-black' >SHOP NOW</button>
        <button className='mt-25  bg-violet-400 justify-center h-10 w-40 rounded-full text-nowrap items-center flex  hover:bg-red-400 hover:scale-105 cursor-pointer active:scale-95 font-bold text-black'>
          EXPLORE NOW
        </button>
    </div>
  )
}

export default Button