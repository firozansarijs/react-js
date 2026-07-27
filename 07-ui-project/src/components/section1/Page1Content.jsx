import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='px-10 h-[90vh] items-center flex gap-10  py-18'>
       <LeftContent/>
       <RightContent users = {props.users}/>
    </div>
  )
}

export default Page1Content