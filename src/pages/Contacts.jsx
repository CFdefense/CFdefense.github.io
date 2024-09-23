import React from "react";
import { useLocation } from "react-router-dom";
import Background from "../components/Background";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import ContactsContent from "../components/ContactsContent";
import { FadeIn } from "../animations/fadeIn";

function Contacts() {
  const location = useLocation();
  const currentPage = location.pathname.replace('/', '') || 'home'; // Determine the current page

  return (
    <div className="overflow-x-hidden h-screen">
      <Background />
      <NavBar currentPage={currentPage} />
      <FadeIn>
        <Header title="Contact Me" />
      </FadeIn>
      <ContactsContent />
    </div>
  );
}
  
  export default Contacts

/*
  1. Linkedin, Github
  2. Contact me form through formspree
*/