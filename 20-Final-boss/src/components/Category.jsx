import React from 'react'
import CategoryBox from './CategoryBox'
import { MoveUpRight } from 'lucide-react'

const Category = () => {
  return (
    <div className='h-screen'>
        <div>
       <p className='text-amber-600 flex py-20 justify-center items-center text-xs'>E X P L O R E</p>
       <br />
       <h1 className='text-black font-style: italic flex justify-center text-5xl'>Shop By Category</h1>
       <br />
       <p className='text-gray-400 flex justify-center'>Find your perfect style across our thoughtfully curated collections</p>
       <div className='px-5 py-3 flex gap-15' >
        <div className='bg-[url(https://i.pinimg.com/736x/77/0a/34/770a341349bd1fdf9ea3b62261c91288.jpg)] bg-cover bg-bg-center h-180 w-100 hover:scale-99 relative '>
        <MoveUpRight className='border-2 rounded-full text-white h-10 w-10 absolute right-2 top-6 ' />
        <h1 className='text-3xl text-white font-bold absolute top-150 left-7 '>Ready to Wear</h1>
        <p className='text-gray-300 font-bold absolute top-165 left-7'>48 Pieces</p>
        </div>
          <CategoryBox img = {'https://i.pinimg.com/736x/f4/0f/aa/f40faa39b6f22fbdae0e0602963a2657.jpg'} text = {'HOODIES & Sweater'} amount = {'24 '} />
          <CategoryBox img = {'https://i.pinimg.com/1200x/71/b4/82/71b4828b2e719840c950763625585460.jpg'} text = {'Dresses'} amount = {'42 '} />
          <CategoryBox img = {'https://i.pinimg.com/1200x/68/f4/14/68f414d21abd4507ada9d8999a249f8a.jpg'} text = {'Accessories'} amount = {'68 '} />
       </div>
        </div>

    </div>
  )
}

export default Category