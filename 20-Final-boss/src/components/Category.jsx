import React from 'react'
import CategoryBox from './CategoryBox'

const Category = () => {
  return (
    <div className='min-h-screen'>
      <div>

        <p className='text-amber-600 flex py-20 justify-center items-center text-xs'>
          E X P L O R E
        </p>

        <h1 className='text-black italic flex justify-center text-5xl'>
          Shop By Category
        </h1>

        <p className='text-gray-400 flex justify-center mt-6 mb-10'>
          Find your perfect style across our thoughtfully curated collections
        </p>

        <div className='px-5 py-3 grid grid-cols-4 gap-6'>

          <CategoryBox
            img='https://i.pinimg.com/736x/77/0a/34/770a341349bd1fdf9ea3b62261c91288.jpg'
            text='Ready to Wear'
            amount='48 Pieces'
          />

          <CategoryBox
            img='https://i.pinimg.com/736x/f4/0f/aa/f40faa39b6f22fbdae0e0602963a2657.jpg'
            text='HOODIES & Sweater'
            amount='24 Pieces'
          />

          <CategoryBox
            img='https://i.pinimg.com/1200x/71/b4/82/71b4828b2e719840c950763625585460.jpg'
            text='Dresses'
            amount='42 Pieces'
          />

          <CategoryBox
            img='https://i.pinimg.com/1200x/68/f4/14/68f414d21abd4507ada9d8999a249f8a.jpg'
            text='Accessories'
            amount='68 Pieces'
          />

          <CategoryBox
            img='https://i.pinimg.com/736x/f1/9c/2c/f19c2c03d60b9ce9ee01c815e22bc44e.jpg'
            text='T-Shirts'
            amount='198 Pieces'
          />

        </div>

      </div>
    </div>
  )
}

export default Category