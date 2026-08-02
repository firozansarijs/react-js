import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  function increase(){
    setnum(num+1);
  }
  function decrease(){
    setnum(num-1);
  }
  function jump5num() {
    setnum(num+5)
  }
  function less5num() {
    setnum(num-5)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button  onClick = {increase} id='btn'>increase</button> 
      <button  onClick = {decrease} id='btn'>decrease</button> <br />
      <button  onClick = {jump5num} id='btn'>increase 5</button>
      <button  onClick = {less5num} id='btn'>decrease 5</button>
    </div>
  )
}

export default App