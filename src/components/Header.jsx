import React from "react";
import { useBackground } from "./BackgroundProvider";

const Header = ({ title }) => {
  const { changeBackground } = useBackground(); // get our background changer
  return (
    <div className="p-5 flex justify-center mb-12 ">
      <div
        className="text-white text-center font-myFont" 
        style={{ fontSize: '12rem', transform: 'scaleX(2.0) scaleY(2.0)', paddingTop: "20px" }}
        onClick={changeBackground} // on click we will change the background
     >
        {title}
      </div>
    </div>
  );
};

export default Header;
