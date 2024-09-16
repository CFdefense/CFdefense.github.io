import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

/*
  Asset to Manipulate Hero Text
*/
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
      loop: false, // Do not loop typing
      showCursor: false,
    };

    const typed = new Typed(typedElement.current, options);

    // Cleanup component
    return () => {
      typed.destroy();
    };
  }, []);

  // Function For Navigation Fade-In Animation
  useEffect(() => {
    // Apply fade-in effect to list items after component mounts
    const listItems = document.querySelectorAll('.fade-in');
    listItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.remove('opacity-0');
        item.classList.add('opacity-100');
        item.classList.add('translate-y-0');
      }, 2000 + ((100 * (index + 1)))); // Stagger the animation
    });
  }, []);

  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center px-4">
        {/* Name Element */}
        <h1 className="text-8xl whitespace-nowrap font-medium">
          <span ref={typedElement} /> 
        </h1>

        {/* Quick Links */}
        <ul className="text-3xl flex justify-center items-center w-full h-24 max-w-[1240px] mx-auto p-5 space-x-5">
          <li className="p-5 fade-in opacity-0 translate-y-4 transition-opacity transition-transform duration-700">Projects</li>
          <li className="p-5 fade-in opacity-0 translate-y-4 transition-opacity transition-transform duration-700">Experiences</li>
          <li className="p-5 fade-in opacity-0 translate-y-4 transition-opacity transition-transform duration-700">Skills</li>
          <li className="p-5 fade-in opacity-0 translate-y-4 transition-opacity transition-transform duration-700">About</li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
