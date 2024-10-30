import React from 'react';

interface BeerImageProps {
  image: string;
}

const BeerImage: React.FC<BeerImageProps> = ({ image }) => (
  <div className="w-full lg:w-1/2 flex justify-center">
    <img
      src={image}
      alt="Beer Image"
      className="w-[120%] h-auto max-w-lg object-cover rounded-xl shadow-lg"
    />
  </div>
);

export default BeerImage;
