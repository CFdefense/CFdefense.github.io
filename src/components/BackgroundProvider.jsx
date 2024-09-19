import React, { createContext, useState, useContext, useEffect } from 'react';

// Context Object to Share Background Image State
const BackgroundContext = createContext();

// Export Background Image to Child Components
export const BackgroundProvider = ({ children }) => {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    // List of images
    const images = [
      'media/backgrounds/abstract_blured.jpg',
      'media/backgrounds/aesthetic_deer.png',
      'media/backgrounds/arcade_decay_red.png',
      'media/backgrounds/aurora_borealis.png',
      'media/backgrounds/boat_abondoned.jpg',
      'media/backgrounds/burning_cherry.jpeg',
      'media/backgrounds/cat_leaves.png',
      'media/backgrounds/cloudy_crescent.png',
      'media/backgrounds/cloudy_mountain.png',
      'media/backgrounds/escape_velocity.jpg',
      'media/backgrounds/evening_sky.png',
      'media/backgrounds/future_town.jpg',
      'media/backgrounds/japan_lake.jpg',
      'media/backgrounds/lake_mountain.jpg',
      'media/backgrounds/lakeside_sunset.png',
      'media/backgrounds/lowpoly_street.png',
      'media/backgrounds/min_mountain.jpg',
      'media/backgrounds/moments_before_desk.png',
      'media/backgrounds/mountain_dragon_pink.jpg',
      'media/backgrounds/mountains.jpg',
      'media/backgrounds/mountain_sunset.jpg',
      'media/backgrounds/mushrooms_4.png',
      'media/backgrounds/night_city.png',
      'media/backgrounds/night_moon.png',
      'media/backgrounds/range.png',
      'media/backgrounds/rocket.jpg',
      'media/backgrounds/rocket_launch.png',
      'media/backgrounds/sekiro.jpg',
      'media/backgrounds/shaded_landscape.jpg',
      'media/backgrounds/spring_bloom.jpg',
      'media/backgrounds/street.png',
      'media/backgrounds/sunset.jpg',
      'media/backgrounds/teal_mountain.png',
      'media/backgrounds/tokyo_pink.png',
      'media/backgrounds/wall.jpg',
      'media/backgrounds/wall_paint.jpg',
      'media/backgrounds/wild.png'
    ];

    // Pick a random image
    const randomIndex = Math.floor(Math.random() * images.length);
    setBackgroundImage(images[randomIndex]);
  }, []); // Empty dependency array ensures this runs once when component mounts

  return (
    //Provide Background Image value to all wrapped children
    <BackgroundContext.Provider value={backgroundImage}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackground = () => useContext(BackgroundContext);
