import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {

  return (
    <footer className='p-4 bg-white'>
        <ul className='flex items-center justify-center my-2 text-sm text-gray-500 dark:text-gray-400'>
            <li>
                <Link to={``} className='mr-4 hover:underline md:mr-6 font-semibold'>
                    About
                </Link>
            </li>
            <li>
                <Link to={``} className='mr-4 hover:underline md:mr-6 font-semibold'>
                    Privacy Policy
                </Link>
            </li>
            <li>
                <Link to={``} className='mr-4 hover:underline md:mr-6 font-semibold'>
                    Licensing
                </Link>
            </li>
            <li>
                <Link to={``} className='hover:underline font-semibold'>
                    Contact
                </Link>
            </li>
        </ul>
    </footer>
  );
};

export default Footer;