import React, { createContext, useState, useContext, useEffect } from 'react';

// Context Object to Share Background Image State
const BackgroundContext = createContext();

export const BackgroundProvider = ({ children }) => {
  const [backgroundImage, setBackgroundImage] = useState('');

  // Function to change the background and save it in localStorage
  const changeBackground = () => {
    const images = [
      '/media/backgrounds/abstract_blured.jpg',
      '/media/backgrounds/arcade_decay_red.png',
      '/media/backgrounds/aurora_borealis.png',
      '/media/backgrounds/boat_abondoned.jpg',
      '/media/backgrounds/cat_leaves.png',
      '/media/backgrounds/cloudy_crescent.png',
      '/media/backgrounds/cloudy_mountain.png',
      '/media/backgrounds/escape_velocity.jpg',
      '/media/backgrounds/evening_sky.png',
      '/media/backgrounds/future_town.jpg',
      '/media/backgrounds/lakeside_sunset.png',
      '/media/backgrounds/mountain_dragon_pink.jpg',
      '/media/backgrounds/mountain_sunset.jpg',
      '/media/backgrounds/mountains.jpg',
      '/media/backgrounds/night_city.png',
      '/media/backgrounds/night_moon.png',
      '/media/backgrounds/rocket.jpg',
      '/media/backgrounds/rocket_launch.png',
      '/media/backgrounds/sekiro.jpg',
      '/media/backgrounds/shaded_landscape.jpg',
      '/media/backgrounds/street.png',
      '/media/backgrounds/sunset.jpg',
      '/media/backgrounds/teal_mountain.png',
      '/media/backgrounds/wall.jpg',
      '/media/backgrounds/wild.png',
      '/media/backgrounds/tokyo_pink.png',
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
