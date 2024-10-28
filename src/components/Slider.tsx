import React, { useState, useEffect } from 'react';
import IMAGE from '../images/beer_image_1.jpg';
import IMAGE2 from '../images/beer_image_2.jpg';
import IMAGE3 from '../images/beer_image_3.jpg';

const imagesArray = [IMAGE, IMAGE2, IMAGE3];

const Slider: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveImage((prev) => (prev + 1) % imagesArray.length);
    }, 10000);
    return () => clearTimeout(timer);
  }, [activeImage]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {imagesArray.map((image, idx) => (
        <img
          key={idx}
          src={image}
          alt={`Slider Image ${idx + 1}`}
          className={`${
            idx === activeImage ? 'opacity-100' : 'opacity-0'
          } w-full h-full object-cover absolute transition-opacity duration-1000 ease-in-out`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
    </div>
  );
};

export default Slider;
