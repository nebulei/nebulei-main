import { Link } from 'react-router-dom';



const Navbar = () => {

  return (
    <nav className='fixed w-full h-16 backdrop-blur-xl bg-white/80'>
      <div className='h-16 shadow-lg '>
        <div className='max-w-full mx-auto px-4 flex justify-between items-center h-full'>

          <div>
            <Link to={`/`}>
              <img className='h-8 w-8 flex' src={`https://storage.googleapis.com/nebulei-main-images/icons/nebulei-svg-logo`} alt="Nebulei Logo"></img>
            </Link>
          </div>

          <div className=''>
            <ul className='text-black items-center nebulei-font'>
              <Link to={`/`}>
                <span className='g-transparent hover:bg-slate-200 font-semibold py-2 px-4 rounded-full mx-4'>
                  Sign Up
                </span>
              </Link>
              <Link to={`/`}>
                <span className='bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded-full'> 
                  Login
                </span>
              </Link>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;