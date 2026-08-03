import React from 'react'

const App = () => {
  // sessionStorage.clear()
  // localStorage.setItem('user','firoz')
  // const user = localStorage.getItem('user')
  // localStorage.removeItem('user')
  const user = {
    username:'firoz',
    age: 21,
    city: 'delhi'
  }
  localStorage.setItem('user',JSON.stringify(user))

  const user1 = JSON.parse(localStorage.getItem('user'))
  console.log(user1)
  return (

    <div>
      App
    </div>
  )
}

export default App