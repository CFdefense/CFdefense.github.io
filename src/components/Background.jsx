import React, { useEffect, useState } from 'react';
import { useBackground } from './BackgroundProvider';

const Background = () => {
  const { backgroundImage } = useBackground();
  const [prevImage, setPrevImage] = useState(backgroundImage);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Log the selected background image
    console.log("Selected background image:", backgroundImage);

    // Start fade-in/out effect when backgroundImage changes
    setFade(true);

    const timeout = setTimeout(() => {
      setPrevImage(backgroundImage);
      setFade(false);
    }, 700); // Duration matches the CSS transition

    return () => clearTimeout(timeout);
  }, [backgroundImage]);

  return (
    <div className="fixed inset-0 overflow-hidden">
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-out ${fade ? 'opacity-0' : 'opacity-100'}`}
        style={{
          backgroundImage: `url(${prevImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1,
        }}
      />
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-in ${fade ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 2,
        }}
      />
    </div>
  );
};

export default Background;
