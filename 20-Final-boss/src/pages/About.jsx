import React from 'react'


const About = () => {
  return (
    <div>
         <section className="min-h-screen bg-[#f5f1eb] flex flex-col items-center justify-center">

  <p className="text-sm tracking-[0.5em] text-red-400">
    CUSTOMER VOICES
  </p>

  <h1 className="text-6xl font-serif mt-5">
    What They <i>Say</i>
  </h1>

  <span className="text-6xl text-red-400 mt-20">
    ❝
  </span>

  <p className="max-w-3xl text-center text-3xl italic leading-relaxed mt-8">
    The quality is amazing and the Spider-Man designs
    look great. Definitely ordering again.
  </p>

  <div className="flex items-center gap-4 mt-10">

    <div className="h-14 w-14 rounded-full bg-red-500 flex items-center justify-center text-white">
      F
    </div>

    <div>
      <h3 className="font-semibold">
        Firoz
      </h3>

      <p className="text-gray-500 text-sm">
        SpidyStore Customer
      </p>
    </div>

  </div>

  <div className="flex gap-3 mt-12">
    <span className="h-2.5 w-2.5 rounded-full bg-red-400"></span>
    <span className="h-2.5 w-2.5 rounded-full bg-gray-300"></span>
    <span className="h-2.5 w-2.5 rounded-full bg-gray-300"></span>
  </div>

</section>
    </div>
  )
}

export default About