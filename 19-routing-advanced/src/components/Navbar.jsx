import React from 'react'
import { Link } from 'react-router'
const Navbar = () => {
  return (
    <div>
        <nav className='flex items-center px-3 py-1 h-20 bg-white  text-black '>
            <h3 className='text-4xl  font-bold font  hover:text-red-500'>SpidyStore</h3>
            <div className='flex ml-90 text-20 gap-15'>
           <Link
           to='/collection'
            className="relative inline-block
               after:content-['']
               after:absolute
               after:left-0
               after:-bottom-2
               after:w-0
               after:h-0.5
             after:bg-yellow-500
               hover:after:w-full
              after:transition-all
             after:duration-300
             text-1xl 
             font-bold"
              >
                Collections
                </Link>
           <Link className="relative inline-block
               after:content-['']
               after:absolute
               after:left-0
               after:-bottom-2
               after:w-0
               after:h-0.5
             after:bg-yellow-500
               hover:after:w-full
              after:transition-all
             after:duration-300
             text-1xl 
             font-bold" 
             to='/trending'>
              Trending
              </Link>
           <Link className="relative inline-block
               after:content-['']
               after:absolute
               after:left-0
               after:-bottom-2
               after:w-0
               after:h-0.5
             after:bg-yellow-500
               hover:after:w-full
              after:transition-all
             after:duration-300
             text-1xl 
             font-bold" 
             to='/contact'>
              Contact
              </Link>
           <Link className="relative inline-block
               after:content-['']
               after:absolute
               after:left-0
               after:-bottom-2
               after:w-0
               after:h-0.5
             after:bg-yellow-500
               hover:after:w-full
              after:transition-all
             after:duration-300
             text-1xl 
             font-bold"
              to='/about'>
              About
              </Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar