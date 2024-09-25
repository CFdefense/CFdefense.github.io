import React, { useCallback, useState } from "react";
import { useBackground } from "./BackgroundProvider";

const Header = ({ title }) => {
  const { changeBackground } = useBackground();
  const [isDebouncing, setIsDebouncing] = useState(false);

  const handleChangeBackground = useCallback(() => {
    if (isDebouncing) return; // Prevent further clicks while debouncing
    setIsDebouncing(true);
    changeBackground();

    // Reset debounce after a short delay (e.g., 1 second)
    setTimeout(() => {
      setIsDebouncing(false);
    }, 1000); // Adjust the timeout as necessary
  }, [changeBackground, isDebouncing]);

  return (
    <div className="p-5 flex justify-center mb-2">
      <div title="Click Me"
        className="text-white text-center font-myFont cursor-pointer "
        style={{ fontSize: '9rem', transform: 'scaleX(2.0) scaleY(2.0)', paddingTop: "20px" }}
        onClick={handleChangeBackground} // Debounced click to change the background
      >
        {title}
      </div>
    </div>
  );
};

export default Header;
