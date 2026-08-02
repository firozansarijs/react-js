import React from 'react'
const App = () => {
  function mouse(elem){
    console.log(elem.deltaX,elem.deltaY)
  }
  return (
   <div>
      <button className='px-20 py-20 border-2 bg-amber-300 h-500 w-600' onWheel ={mouse}></button>
   </div>
  )
}
export default App