import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  function Achanging () {
     console.log("A ki value aa gayii....");
     
  }
  function Bchanging () {
    console.log("b ki value aa gayi...");
    
  }
  useEffect(function() {
    Achanging()
  },[a])
  useEffect(function() {
    Bchanging()
  },[b])
  return (
    <div>
      <h1>A = {a}</h1>
      <h1>B = {b}</h1>
      <button onClick={() => {
        setA(a+1)
      }}>
        Achanging
      </button>
      <button onClick={() => {
        setB(b-1)
      }}>
        Bchanging
      </button>
      </div>         
  )
}

export default App