import React from "react";

const Header = ({ title }) => {
  return (
    <div className="p-5 flex justify-center mb-12 ">
      <div
        className="text-white text-center font-myFont" 
        style={{ fontSize: '12rem', transform: 'scaleX(2.0) scaleY(2.0)', paddingTop: "20px" }}
     >
        {title}
      </div>
    </div>
  );
};

export default Header;
