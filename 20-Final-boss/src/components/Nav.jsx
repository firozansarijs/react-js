import React from 'react'
import { Link } from "react-router-dom";
import {Search} from 'lucide-react';
import {User } from 'lucide-react';
import { ShoppingBag } from "lucide-react";

const Nav = () => {
  return (
    <div >
      <nav className=" sticky top-0 z-50 bg-black flex items-center justify-between h-20 px-7 text-white">
      <h1 className="font-bold text-3xl text-red-800">
        S Ì P D È R
        </h1>
      <div  className="flex items-center gap-10 text-red-800 font-bold"  >
     <a href="#Home"
        className="
      relative inline-block
               after:content-['']
               after:absolute
               after:left-0
               after:-bottom-2
               after:w-0
               after:h-0.5
             after:bg-white
               hover:after:w-full
              after:transition-all
             after:duration-300
             text-1xl 
             font-bold
             nav-link
             "
     >Home</a>
       <a href="#trending"
        className="
      relative inline-block
               after:content-['']
               after:absolute
               after:left-0
               after:-bottom-2
               after:w-0
               after:h-0.5
             after:bg-white
               hover:after:w-full
              after:transition-all
             after:duration-300
             text-1xl 
             font-bold
             nav-link
             "
     >Trending</a>
       <a href="#collection"
        className="
      relative inline-block
               after:content-['']
               after:absolute
               after:left-0
               after:-bottom-2
               after:w-0
               after:h-0.5
             after:bg-white
               hover:after:w-full
              after:transition-all
             after:duration-300
             text-1xl 
             font-bold
             nav-link
             "
     >Collection</a>
       <a href="#about"
        className="
      relative inline-block
               after:content-['']
               after:absolute
               after:left-0
               after:-bottom-2
               after:w-0
               after:h-0.5
             after:bg-white
               hover:after:w-full
              after:transition-all
             after:duration-300
             text-1xl 
             font-bold
             nav-link
             "
     >About</a>
       <a href="#contact"
        className="
      relative inline-block
               after:content-['']
               after:absolute
               after:left-0
               after:-bottom-2
               after:w-0
               after:h-0.5
             after:bg-white
               hover:after:w-full
              after:transition-all
             after:duration-300
             text-1xl 
             font-bold
             nav-link
             "
     >Contact</a>
      </div >
      <div className="flex items-center gap-8 ">
        <Search className='hover:scale-95' />
        <User className='hover:scale-95' />
     <div className="relative">
       <ShoppingBag className='hover:scale-95'  />
      <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-semibold text-white">3</span>
       </div>
      </div>
      </nav>
    </div>
  )
}

export default Nav