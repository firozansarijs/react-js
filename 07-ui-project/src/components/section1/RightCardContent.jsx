import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
         <div  className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
            <h2 className='bg-green-100 text-2xl font-semibold rounded-full text-gray-400 h-14 w-12 flex justify-center items-center'>{props.id+1}</h2>
            <div>
                <p className='font-bold text-xl leading-normal text-gray-200 mb-10'>{props.intro}</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className=' text-white font-medium px-8 py-3 rounded-full '>{props.tag}</button>
                    <button  style={{backgroundColor:props.color}} className=' text-white font-medium px-3 py-2 rounded-full '><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
       </div>
    </div>
  )
}

export default RightCardContent