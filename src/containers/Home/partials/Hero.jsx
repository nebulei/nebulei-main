import React from 'react'


const Hero = () => {

  return (
    <>
    <section className=''>
      <div className='bg-transparent'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          <h1 className='text-black md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 nebulei-font'>
            Igniting the light of Human Ambition
          </h1>
          <p className='text-black md:text-2xl text-xl font-bold nebulei-font-2'>
            Share your research, publications, work, or opinion on diverse theoretical subjects & take part of ambitious projects.
          </p>
          <div className='flex flex-none'>
          <button className='bg-purple-600 hover:bg-purple-500 w-[200px] rounded-md my-6 mx-auto py-3 text-white nebulei-font-2 font-bold'>
            Join Nebulei
          </button>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero