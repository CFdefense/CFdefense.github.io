import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";

/*
    Nav Bar Component to be Used on Sub Pages
*/
const NavBar = ({ currentPage }) => {
  const [nav, setNav] = useState(false);

  // Function to Toggle Effect
  const navEffect = () => {
    setNav(!nav);
  }
  
  return (
    <div className='relative h-24 w-full overflow-hidden z-50'>
      <div className='absolute top-0 right-5 flex items-center text-white'>
      <ul className={`flex text-2xl mr-5 transition-all duration-500 ease-in-out transform ${
              nav ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
            }`}> {/* Animation for Opening and Closing Nav Icon*/}
          {currentPage !== 'projects' && <li className="p-5"><Link to="/projects">Projects</Link></li>}
          {currentPage !== 'experience' && <li className="p-5"><Link to="/experience">Experience</Link></li>}
          {currentPage !== 'contacts' && <li className="p-5"><Link to="/contacts">Contacts</Link></li>}
          {currentPage !== 'about' && <li className="p-5"><Link to="/about">About</Link></li>}
          <li className="p-5"><Link to="/">Home</Link></li> {/* Always include Home link */}
        </ul>
        <div className='text-4xl font-bold cursor-pointer'>
          <div onClick={navEffect}>
            {!nav ? <CiMenuBurger /> : <CiMenuFries /> /* Eval Nav State */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;