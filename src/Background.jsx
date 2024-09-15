import React, { useEffect, useState} from "react"

const Background = () => {
    
    useEffect(() => {
        // Images to be Randomly Selected
        const images = [
            'media/abstract_blured.jpg',
            'media/cloudy_crescent.png',
            'media/cloudy_mountain.png',
            'media/japan_lake.jpg',
            'media/lake_mountain.jpg',
            'media/rocket_launch.png',
            'media/rocket.jpg',
            'media/samurai_bebop.png',
            'media/sekiro.jpg',
            'media/shaded_landscape.jpg',
            'media/teal_mountain.png'
        ];

        // Select a Random Image
        const randomIndex = Math.floor(Math.random() * images.length)
        const randomImage = images[randomIndex];

        // Update Variable in index.css
        document.body.style.setProperty('--background-image', `url(${randomImage})`);
    }, []);

    return null;
}

export default Background
