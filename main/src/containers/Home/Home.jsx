import React from 'react'
import Typed from 'react-typed';


const Home = () => {
  return (
    <>
    <section className="h-screen">
      <div className='w-full h-full mx-auto text-center flex flex-col justify-center container'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-black nebulei-font'>
          Nebulei
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 text-black'>
            Are you a 
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 italic'
            strings={['Scientist', 'Researcher', 'Engineer', 'Technologist', 'Philosopher', 'Psycologist', 'Historian']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-white-500 nebulei-font'>Advancing Humanity with the power of shared information.</p>
        <div className="flex justify-center mt-5">
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-purple-600 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Login
            </span>
          </button>
          <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-[#C77DFF] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2">
            Register
          </button>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home