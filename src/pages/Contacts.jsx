import React from "react";
import { useLocation } from "react-router-dom";
import Background from "../components/Background";
import NavBar from "../components/NavBar";

function Contacts() {
  const location = useLocation();
  const currentPage = location.pathname.replace('/', '') || 'home'; // Determine the current page

  return (
    <div className="overflow-x-hidden h-screen">
      <Background />
      <NavBar currentPage={currentPage} />
      <div className="-mt-12 mx-auto text-center text-white font-myFont " style={{ fontSize: '12rem', transform: 'scaleX(2.0) scaleY(2.0)', paddingTop: "20px"}}>
        Lets Connect
      </div>
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