import React, { useState } from 'react'

const App = () => { 
  const [num, setNum] = useState(10)
  const btnclicked = () => {
    const newNum = {...num}
    setNum(prev => (prev + 1))
    setNum(prev => (prev + 1))
    setNum(prev => (prev + 1))
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnclicked}>click me!!</button>
    </div>
  )
}

export default App