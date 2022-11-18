import { Link } from 'react-router-dom';


const Hero = () => {

  return (
    <>
    <section className="flex justify-center flex-col m-auto h-screen">
      <div className='mx-4'>
        <div className='max-w-[800px] h-full mx-auto text-center flex flex-col justify-center'>
          <h1 className='text-black md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 nebulei-font'>
            Igniting the light of Human Ambition
          </h1>
          <p className='text-black md:text-2xl text-xl font-normal nebulei-font'>
            Share your research, publications, work, or opinion on diverse theoretical subjects & take part in ambitious projects.
          </p>
          <div className='flex flex-none'>
          <Link to={`/register`} className='bg-purple-600 hover:bg-purple-500 w-[200px] rounded-full my-6 mx-auto py-3 text-white nebulei-font font-extrabold'>
            Join Nebulei
          </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;