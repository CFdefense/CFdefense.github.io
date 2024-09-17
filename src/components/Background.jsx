import React, { useEffect } from 'react';
import { useBackground } from './BackgroundProvider'; // Import the useBackground hook

const Background = () => {
  const backgroundImage = useBackground();

  useEffect(() => {
    // Update the CSS variable for the background image
    document.body.style.setProperty('--background-image', `url(${backgroundImage})`);
  }, [backgroundImage]); // Dependency array to reapply if backgroundImage changes

  return null;
};

export default Background;
