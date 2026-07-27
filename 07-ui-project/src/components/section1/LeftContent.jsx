import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Arrow from './Arrow'
import Title from './Title'

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3 leading-[1.1]'>
     <Title/>
     <Arrow/>
    </div>
  )
}

export default LeftContent