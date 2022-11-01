import { Link } from 'react-router-dom';

import NoAccBtn from '../NoAccBtn/NoAccBtn';



const Nav = () => {
  return (
  <nav className='fixed w-full h-16'>
    <div className='h-16'>
      <div className='max-w-full mx-auto px-4 flex justify-between items-center h-full'>

        <div>
          <Link to={`/`}>
            <img className='h-8 w-8 flex' src={`https://storage.googleapis.com/nebulei-main-images/icons/nebulei-svg-logo`} alt="Nebulei"></img>
          </Link>
        </div>

        <div>
          <ul className='text-black items-center nebulei-font'>
            <Link to={`/register`}>

            <NoAccBtn />

            </Link>
          </ul>
        </div>

      </div>
    </div>
  </nav>
  );
};

export default Nav;