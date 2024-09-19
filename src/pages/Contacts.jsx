import React from "react";
import { useLocation } from "react-router-dom";
import Background from "../components/Background";
import NavBar from "../components/NavBar";
import Header from "../components/Header";

function Contacts() {
  const location = useLocation();
  const currentPage = location.pathname.replace('/', '') || 'home'; // Determine the current page

  return (
    <div className="overflow-x-hidden h-screen">
      <Background />
      <NavBar currentPage={currentPage} />
      <Header title="Lets Connect" />
      <div className="text-white text-center">
        Some text talking about how I am open to opportunties ect
      </div>
      <div className="text-white">
        Socials Here
      </div>
    </div>
  );
}
  
  export default Contacts