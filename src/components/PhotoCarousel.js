import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

function PhotoCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const photos = [
        { src: 'https://via.placeholder.com/800x400?text=First+slide', alt: 'First slide' },
        { src: 'https://via.placeholder.com/800x400?text=Second+slide', alt: 'Second slide' },
        { src: 'https://via.placeholder.com/800x400?text=Third+slide', alt: 'Third slide' },
    ];

    const nextIndex = index === photos.length - 1 ? 0 : index + 1;

    setTimeout(() => {
        setIndex(nextIndex);
    }, 3000);

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {photos.map((photo, i) => (
                <Carousel.Item key={i}>
                    <img className="d-block w-100" src={photo.src} alt={photo.alt} />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default PhotoCarousel;