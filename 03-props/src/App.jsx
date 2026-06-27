import React from 'react'
import Profile from './components/Profile'

const App = () => {
  return (
  <div className='parent'>
      <Profile user= "Prachi" age = {18}  img = "https://plus.unsplash.com/premium_photo-1673967831980-1d377baaded2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Profile  user= "Firoz"  age = {21} img="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba" />
    </div>
  )
}

export default App