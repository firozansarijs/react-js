import React from 'react'
import { Link } from "react-router-dom";
import {Search} from 'lucide-react';
import {User } from 'lucide-react';
import { ShoppingBag } from "lucide-react";

const Nav = () => {
  return (
    <div >
      <nav className="bg-black flex items-center justify-between whitespace-nowrap h-20 text-white">
      <h1 className=' px-7 py-5 font-bold text-3xl text-red-800 '>S Ì P D È R</h1>
      <div   className="text-red-800 ml-100 text-100 | gap-10"  >
      <Link
      className="relative inline-block
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
             mr-10
      "
      to="/"
        >
        Home
      </Link>
      <Link 
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
       mr-10"
      to="/trending">Trending</Link>
      <Link
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
      mr-10"
       to="/collection">Collection</Link>
      <Link
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
      mr-10"
       to="/about">About</Link>
      <Link 
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
      mr-10"
      to="/contact">Contact</Link>
      </div>
      <div className='ml-80'>
        <Search />
      </div>
      <div className='ml-10'>
        <User />
      </div>
     <div className="cart-icon relative inline-flex ml-10">
       <ShoppingBag  />
      <span className="cart-count absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-semibold text-white">3</span>
       </div>
      </nav>
    </div>
  )
}

export default Nav