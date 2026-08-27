import React from 'react'

const Rightside = () => {
  return (
    <div>
        <input
         className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl w-200 outline-none p-8 text-lg font-bold"
         type="text"
         placeholder='YOUR NAME' 
         />
          <input
         className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl w-200 outline-none p-8  mt-10 text-lg font-bold"
         type="text"
         placeholder='YOUR EMAIL' 
         />
          
          <textarea
         className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl w-200 h-50 outline-none p-8 mt-10 text-lg font-bold"
         type="text"
         placeholder='YOUR MESSAGE/YOUR PROBLEM' 
         />
         <button className='mt-5 bg-blue-500 rounded-2xl h-10 w-50 hover:scale-105 cursor-pointer active:scale-95 font-bold text-lg text-black hover:bg-red-200'>Send Message</button>
        </div>
  )
}

export default Rightside