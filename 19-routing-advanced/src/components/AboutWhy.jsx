import React from 'react'

const AboutWhy = () => {
  return (
    <div className='p-10 flex gap-15 text-black'>
        <div className='h-70 w-50 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl   hover:scale-105'>
          <div className=' rounded-2xl'>
            <img className='bg-center bg-cover rounded-2xl' src="https://i.pinimg.com/1200x/60/5d/ef/605def2f983746dae4102ab9a0a795ce.jpg" alt="" />
          </div>
          <h1 className='pl-2 font-bold'>
           🚚 Free Shipping
          </h1>
          <p className='pl-2 font-semibold'>
           Get free shipping on all orders above ₹999.
          </p>
        </div>
        <div className='h-70 w-50 bg-white/10 backdrop-blur-md border border-white/20 text-white  rounded-2xl hover:scale-105'>
          <div className=' rounded-2xl'>
            <img className='bg-center bg-cover rounded-2xl'  src="https://imgs.search.brave.com/dKYlHjqlRiiqLz5kIDcVMxuU9iSp5T5mzwXlZMcXCb4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tdmVj/dG9yL3ByZW1pdW0t/cXVhbGl0eS1nb2xk/ZW4tc3RhbXAtc2Vh/bC12ZWN0b3ItdGVt/cGxhdGVfOTE3MTM4/LTUwNzEuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZCZ3PTc0MCZxPTgw" alt="" />
          </div>
          <h1 className='pl-2 font-bold'>
            ⭐  Premium Quality
          </h1>
          <p className='pl-2 font-semibold'>
            Made with high-quality cotton and durable fabric.
          </p>
        </div>
        <div className='h-70 w-50 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl hover:scale-105'>
            <div className='rounded-2xl'>
              <img className='bg-center bg-cover h-45 rounded-2xl' src="https://i.pinimg.com/736x/49/6e/42/496e42fc5f93207b28b79082e9df2e75.jpg" alt="" />
          </div>
            <h1 className='pl-2 font-bold'>
            💳 Secure Payment
          </h1>
          <p className='pl-2 font-semibold'>
           100% secure payment with UPI, Cards and Net Banking.
          </p>
        </div>
        <div className='h-70 w-50 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl hover:scale-105'>
           <div className=' rounded-2xl'>
                 <img className='bg-center bg-cover rounded-2xl' src="https://i.pinimg.com/736x/63/23/49/63234957750a73b7512385acfe79e9ff.jpg" alt="" />
          </div>
            <h1 className='pl-2 font-bold'>
             🛡  24/7 Support
          </h1>
          <p className='pl-2 font-semibold'>
           Our support team is always ready to help you.
          </p>
        </div>
    </div>
  )
}

export default AboutWhy