import React, { createContext, useState, useContext, useEffect } from 'react';

// Context Object to Share Background Image State
const BackgroundContext = createContext();

export const BackgroundProvider = ({ children }) => {
  const [backgroundImage, setBackgroundImage] = useState('');

  // Function to change the background and save it in localStorage
  const changeBackground = () => {
    const images = [
      '/media/backgrounds/abstract_blured.jpg',
      '/media/backgrounds/aesthetic_deer.png',
      '/media/backgrounds/arcade_decay_red.png',
      '/media/backgrounds/aurora_borealis.png',
      '/media/backgrounds/boat_abondoned.jpg',
      '/media/backgrounds/burning_cherry.jpeg',
      '/media/backgrounds/cat_leaves.png',
      '/media/backgrounds/cloudy_crescent.png',
      // other images...
    ];

    // Pick a random image
    const randomIndex = Math.floor(Math.random() * images.length);
    const newImage = images[randomIndex];

    setBackgroundImage(newImage);
    localStorage.setItem('backgroundImage', newImage); // Save to localStorage
  };

  // On mount, check if background is stored in localStorage
  useEffect(() => {
    const savedBackground = localStorage.getItem('backgroundImage');
    if (savedBackground) {
      setBackgroundImage(savedBackground); // Use saved background if available
    } else {
      changeBackground(); // Otherwise, set a random background
    }
  }, []);

  return (
    <BackgroundContext.Provider value={{ backgroundImage, changeBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
};

// Hook to access background image and changeBackground function
export const useBackground = () => useContext(BackgroundContext);
