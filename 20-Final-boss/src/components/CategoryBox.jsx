import React from 'react'
import { MoveUpRight } from 'lucide-react'

const CategoryBox = (props) => {
  return (
    <div className='h-110 w-full relative overflow-hidden'>

      <img
        className='h-full w-full object-cover object-center'
        src={props.img}
        alt={props.text}
      />

      <MoveUpRight className='border-2 rounded-full text-white h-10 w-10 absolute right-2 top-2' />

      <div className='absolute bottom-5 left-5'>
        <h1 className='text-3xl text-white font-bold'>
          {props.text}
        </h1>

        <p className='text-gray-300 font-bold mt-2'>
          {props.amount}
        </p>
      </div>

    </div>
  )
}

export default CategoryBox