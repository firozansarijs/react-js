import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

export const App = () => {
  const users = [
    {img: 'https://i.pinimg.com/1200x/4c/40/64/4c4064c72c172a49dd72b5d54c93900e.jpg' ,
     color: 'lightskyblue',
     intro: 'Doctor Doom',
     tag: 'Dooms click!!'
    },
    {
     img: 'https://i.pinimg.com/736x/f9/1f/02/f91f02a3491c0ce2042556ab195d9fb1.jpg' ,
     color: 'orange',
     intro: 'Captain America',
     tag: 'Captain click!!'
    },
    {
     img: 'https://i.pinimg.com/736x/76/fe/34/76fe347826921c03e367d8bef281da54.jpg' ,
     color: 'violet',
     intro: 'Thor',
     tag: 'Thor click!!'
    },
  ]
  return (
    <div>
        <Section1 users={users} />
        <Section2 />
    </div>
  )
}
export default App