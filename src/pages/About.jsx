import React from "react";
import { useLocation } from "react-router-dom";
import Background from "../Background";
import NavBar from "../NavBar";

function About() {
  const location = useLocation();
  const currentPage = location.pathname.replace('/', '') || 'home'; // Determine the current page

  return (
    <div>
      <Background />
      <NavBar currentPage={currentPage} />
    </div>
  );
}
  
  export default About