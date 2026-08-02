import  { useState } from 'react'

const App = () => {
const [title, setTitle] = useState('')
const [details, setDetails] = useState('')

const newValue = (e) => {
   e.preventDefault(e)
   setTitle('')
   setDetails('')
}

  return (
    <div className='min-h-screen lg:flex  bg-black'>
      <form className='flex flex-col items-start lg:w-1/2  gap-5 text-white p-10'  onSubmit={(e) => {
          newValue(e)
    }}>
      <input 
      className='px-5 py-2 w-1/2 border-2 rounded outline-none font-bold '
      type="text" 
      placeholder='Enter your title'
      value = {title}
      onChange={(e) => {
         setTitle(e.target.value);
        }}
      />
      <textarea 
      className='px-5 py-2 w-1/2 h-30 border-2 rounded outline-none font-medium'
      placeholder='Enter your details'
       value = {details}
        onChange={(e) => {
         setDetails(e.target.value);
        }}
      >
</textarea>
      <button className='bg-white text-black h-10 w-1/2 px-5 py-2 rounded outline-none' onClick={newValue}>
      Add notes</button>
    </form>
    <div className=' lg:w-1/2 border-l-10 p-10'>
      <h1 className='text-xl font-bold text-white'>Your notes</h1>
    <div className='flex flex-wrap  gap-5 mt-5'>
      <div className='h-50 w-40 rounded-2xl bg-amber-50'></div>
    <div className='h-50 w-40 rounded-3xl bg-amber-50'></div>
    <div className='h-50 w-40 rounded-3xl bg-amber-50'></div>
    </div>
    </div>
    </div>
  )
}

export default App