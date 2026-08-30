import React from 'react'
import { MoveUpRight } from 'lucide-react'

const CategoryBox = (props) => {
  return (
    <div>
      <div className='h-100 w-80 relative'>

        <img
          className='h-110 w-100 object-cover object-center hover:scale-105'
          src={props.img}
          alt={props.text}
        />

        <MoveUpRight
          className='border-2 rounded-full text-white h-10 w-10 absolute right-2 top-2'
        />

        <h1 className='text-3xl text-white font-bold absolute bottom-8 left-2'>
          {props.text}
        </h1>

        <p className='text-gray-300 font-bold absolute bottom-0.5 left-2'>
          {props.amount} Pieces
        </p>

      </div>
    </div>
  )
}

export default CategoryBox