import React from "react";
import { useLocation } from "react-router-dom";
import Background from "../components/Background";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import { Reveal } from "../animations/reveal";

function Experience() {
  const location = useLocation();
  const currentPage = location.pathname.replace('/', '') || 'home'; // Determine the current page

  return (
    <div className="overflow-x-hidden h-screen">
      <Background />
      <NavBar currentPage={currentPage} />
      <Reveal>
        <Header title="Experience" />
      </Reveal>
    </div>
  );
}
  
  export default Experience