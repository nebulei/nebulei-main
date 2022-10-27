import { Link } from 'react-router-dom';


function NotFound() {

  return (
    <>
    <section id='MainBackground' className='flex items-center justify-center h-screen'>
        <div className='mx-4'>
            <div className='mx-auto max-w-screen-sm text-center'>
                <h1 className='mb-4 text-7xl tracking-tight font-extrabold lg:text-9xls text-white'>
                    404
                </h1>
                <p className='mb-4 text-3xl tracking-tight font-bold text-white md:text-4xl'>
                    Something's missing.
                </p>
                <p className='mb-10 text-lg font-light text-white'>
                    Sorry, we don't have that page. Perhaps you've missed typed it?
                </p>
                <Link to={`/`} className='bg-white nebulei-font text-black font-semibold py-3 px-4 rounded-full'>
                    Go Home
                </Link>
            </div>   
        </div>
    </section>
    </>
  );
};

export default NotFound;