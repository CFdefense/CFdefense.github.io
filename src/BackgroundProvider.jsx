import React, { createContext, useState, useContext, useEffect } from 'react';

const BackgroundContext = createContext();

export const BackgroundProvider = ({ children }) => {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    // List of images
    const images = [
      'media/abstract_blured.jpg',
      'media/aesthetic_deer.png',
      'media/arcade_decay_red.png',
      'media/aurora_borealis.png',
      'media/boat_abondoned.jpg',
      'media/burning_cherry.jpeg',
      'media/cat_leaves.png',
      'media/cloudy_crescent.png',
      'media/cloudy_mountain.png',
      'media/escape_velocity.jpg',
      'media/evening_sky.png',
      'media/future_town.jpg',
      'media/japan_lake.jpg',
      'media/lake_mountain.jpg',
      'media/lakeside_sunset.png',
      'media/lowpoly_street.png',
      'media/min_mountain.jpg',
      'media/moments_before_desk.png',
      'media/mountain_dragon_pink.jpg',
      'media/mountains.jpg',
      'media/mountain_sunset.jpg',
      'media/mushrooms_4.png',
      'media/night_city.png',
      'media/night_moon.png',
      'media/range.png',
      'media/rocket.jpg',
      'media/rocket_launch.png',
      'media/sekiro.jpg',
      'media/shaded_landscape.jpg',
      'media/spring_bloom.jpg',
      'media/street.png',
      'media/sunset.jpg',
      'media/teal_mountain.png',
      'media/tokyo_pink.png',
      'media/wall.jpg',
      'media/wall_paint.jpg',
      'media/wild.png'
    ];

    // Pick a random image
    const randomIndex = Math.floor(Math.random() * images.length);
    setBackgroundImage(images[randomIndex]);
  }, []); // Empty dependency array ensures this runs once when component mounts

  return (
    <BackgroundContext.Provider value={backgroundImage}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackground = () => useContext(BackgroundContext);
