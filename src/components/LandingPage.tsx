import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from './Slider';

type Rating = {
  average: number;
  review: number;
};

type BeerType = {
  price: string;
  name: string;
  id: number;
  image: string;
  rating: Rating;
};

const LandingPage: React.FC = () => {
  const [filteredItems, setFilteredItems] = useState<BeerType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://api.sampleapis.com/beers/ale');
      setFilteredItems(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Slider />
      <div className="relative z-10 overflow-y-auto h-screen p-4">
        <h1 className="text-2xl font-bold mb-4 text-white">Beer Store</h1>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-28">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded bg-white bg-opacity-20 text-white shadow-md relative"
            >
              <h2 className="font-bold text-white">{item.name}</h2>
              <div className="relative mx-auto w-32 h-32 overflow-hidden rounded">
                <img
                  src={item.image ? item.image : ''}
                  alt="beer image"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-transparentß bg-opacity-50"></div>
              </div>
              <p>Price: {item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
