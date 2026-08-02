import  { useState } from 'react'

const App = () => {
const [title, setTitle] = useState('')
const [details, setDetails] = useState('')

const [task, setTask] = useState([])

const newValue = (e) => {
   e.preventDefault(e)
   const copyTask = [...task]
   copyTask.push({title,details})
   setTask(copyTask)
   setTitle('')
   setDetails('')
}
const deleteNote = (idx) => {
   const copyTask = [...task]
   copyTask.splice(idx,1)
   setTask(copyTask)
}

  return (
    <div className='min-h-screen lg:flex  bg-black'>
      <form className='flex flex-col items-start lg:w-1/2  gap-5 text-white p-10'  onSubmit={(e) => {
          newValue(e)
    }}>
      <h1 className='font-bold text-2xl'>Add notes</h1>
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
      <button className='bg-white text-black h-10 w-1/2 px-5 py-2 rounded outline-none active:scale-95' onClick={newValue}>
      Add notes
      </button>
    </form>
    <div className="lg:w-1/2 lg:border-l-2 lg:border-white p-10">
      <h1 className='text-2xl font-bold text-white'>Recent notes</h1>
    <div className='flex flex-wrap text-black gap-5 mt-5'>
        {task.map(function(elem,idx){
           return <div key={idx} className='relative flex justify-between items-start flex-col h-50 w-40 rounded-2xl p-5 bg-cover bg-[url(https://imgs.search.brave.com/gI2GCJg-U-FDWph_skhDA3Rl8m7XrJt0a83IPNfWgfA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjYv/NDI3LzQwOS9zbWFs/bC9hLXBpZWNlLW9m/LXBhcGVyLXdpdGgt/YS1yZWQtc3RpY2t5/LW5vdGUtcG5nLnBu/Zw)]'>
            <div>
            <h1 className=' font-bold text-2xl leading-tight'>{elem.title}</h1>
            <p className='mt-2 leading-tight font-medium text-gray-600'>{elem.details}</p>
            </div>
             <button className='bg-red-500 cursor-pointer active:scale-95 rounded w-full py-1 text-white font-bold text-xs' onClick={() => {
              deleteNote(idx)
             }}>Delete note</button>
           </div>
        })}
    </div>
    </div>
    </div>
  )
}

export default App