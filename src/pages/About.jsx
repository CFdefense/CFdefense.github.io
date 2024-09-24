import React from "react";
import { useLocation } from "react-router-dom";
import Background from "../components/Background";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import { FadeIn } from "../animations/fadeIn";
import AboutContents from "../components/AboutContents";

function About() {
  const location = useLocation();
  const currentPage = location.pathname.replace('/', '') || 'home'; // Determine the current page

  return (
    <div className="overflow-x-hidden items-center justify-center p-4 md:p-8 lg:p-12">
      <Background />
      <NavBar currentPage={currentPage} />
      <FadeIn>
        <Header title="About Me" />
      </FadeIn>
      <AboutContents />
    </div>
  );
}
  
  export default About

/*
  1.Include Picture of me to the left with description below
  2. On the right include my Skills
  3. Animate Both, Left side traditional reveal,



*/