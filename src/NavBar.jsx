import React from 'react';
import { Link } from 'react-router-dom';

/*
    Nav Bar Component to be Used on Sub Pages
*/
const NavBar = ({ currentPage }) => {
  return (
    <div className='flex justify-end items-center h-24 max-w-[1750px] mx-auto text-white'>
      <ul className='flex text-2xl'>
        {currentPage !== 'projects' && <li className="p-5"><Link to="/projects">Projects</Link></li>}
        {currentPage !== 'experience' && <li className="p-5"><Link to="/experience">Experience</Link></li>}
        {currentPage !== 'contacts' && <li className="p-5"><Link to="/contacts">Contacts</Link></li>}
        {currentPage !== 'about' && <li className="p-5"><Link to="/about">About</Link></li>}
        <li className="p-5"><Link to="/">Home</Link></li> {/* Always include Home link */}
      </ul>
    </div>
  );
};

export default NavBar;