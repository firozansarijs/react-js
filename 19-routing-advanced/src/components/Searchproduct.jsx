import React from 'react'
import {Search} from 'lucide-react';

const Searchproduct = () => {
  return (
      <div className="flex items-center rounded-2xl p-10 ml-10 backdrop-blur-md border border-white/20 w-200 mt-10 h-20 hover:scale-95">
       <input
         type="text"
         placeholder="Search product"
        className="outline-none"
       />
       <Search className="ml-120" size={136} color="#916e6e" strokeWidth={3} />
     </div>
  )
}

export default Searchproduct