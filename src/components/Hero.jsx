import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import { fadeIn } from "../animations/fadeIn"; // Import fadeIn animation

const Hero = () => {
  const typedElement = useRef(null); // Typed element

  useEffect(() => {
    // Initialize Typed.js 
    const options = {
      strings: ["Christian Farrell"],
      typeSpeed: 65,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 500,
      loop: false,
      showCursor: false,
    };

    const typed = new Typed(typedElement.current, options);

    // Cleanup component
    return () => {
      typed.destroy();
    };
  }, []);

  // Apply fade-in effect
  useEffect(() => {
    const listItems = document.querySelectorAll('.fade-in');
    fadeIn(listItems); // Use fadeIn function from animations folder
  }, []);

  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center px-4">
        <h1 className="text-8xl whitespace-nowrap font-medium">
          <span ref={typedElement} />
        </h1>
        <ul className="text-3xl flex justify-center items-center w-full h-24 max-w-[1240px] mx-auto p-5 space-x-5">
          <li className="p-5 fade-in opacity-0 translate-y-4 transition-transform duration-700"><Link to="/projects">Projects</Link></li>
          <li className="p-5 fade-in opacity-0 translate-y-4 transition-transform duration-700"><Link to="/experience">Experience</Link></li>
          <li className="p-5 fade-in opacity-0 translate-y-4 transition-transform duration-700"><Link to="/contacts">Contacts</Link></li>
          <li className="p-5 fade-in opacity-0 translate-y-4 transition-transform duration-700"><Link to="/about">About</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
