import React from 'react'


const Newsletter = () => {
  return (
    <section className="min-h-screen bg-[#f7f3ed] flex flex-col items-center justify-center px-5">

      
      <p className="text-xs tracking-[0.5em] text-red-400">
        STAY CONNECTED
      </p>
      <h1 className="mt-8 text-5xl md:text-6xl font-serif text-black text-center">
        Join the <i>SpidyStore</i> World
      </h1>
      <p className="mt-8 max-w-2xl text-center text-gray-500 text-lg leading-relaxed">
        Subscribe to receive new collections, exclusive drops,
        special offers, and the latest SpidyStore updates.
      </p>
      <form className="flex mt-12 w-full max-w-xl">

        <input
          type="email"
          placeholder="Enter your email address"
          className="flex-1 border border-gray-300 bg-white px-6 py-5 outline-none text-black"
        />

        <button
          type="submit"
          className="bg-black text-white px-8 tracking-[0.3em] text-sm font-bold hover:bg-red-600 transition"
        >
          SUBSCRIBE
        </button>

      </form>
      <p className="mt-5 text-sm text-gray-400 text-center">
        By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
      </p>
      <p className="mt-32 text-xs tracking-[0.5em] text-red-400">
        @SPIDYSTORE
      </p>

    </section>
  )
}

export default Newsletter