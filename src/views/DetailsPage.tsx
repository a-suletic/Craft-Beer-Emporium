import React, { useState } from 'react';
import { useStore } from '../store/store';

function DetailsPage() {
  const setTotal = useStore((state) => state.setTotal);
  const selectedBeer = useStore((state) => state.selected);

  const [amount, setAmount] = useState(1);

  const addItem = () => {
    setTotal(amount);
  };

  return (
    <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
      <div className="flex flex-col gap-6 lg:w-2/4">
        <img
          src={selectedBeer?.image}
          alt=""
          className="w-full h-full aspect-square object-cover rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-4 lg:w-2/4">
        <div>
          <span className=" text-orange-400 font-semibold">Special Beer</span>
          <h1 className="text-3xl font-bold">{selectedBeer?.name}</h1>
        </div>
        <p className="text-gray-700">{selectedBeer?.dsescription}</p>
        <h6 className="text-2xl font-semibold">{selectedBeer?.attenuation}</h6>
        <h6 className="text-2xl font-semibold">
          Tag Line: {selectedBeer?.tagline}
        </h6>
        <h6 className="text-2xl font-semibold">
          Brewers Tips: {selectedBeer?.brand}
        </h6>
        <div className="flex flex-row items-center gap-12">
          <div className="flex flex-row items-center">
            <button
              className="bg-gray-200 py-2 px-5 rounded-lg text-orange-400  text-3xl"
              onClick={() => setAmount((prev) => prev - 1)}
            >
              -
            </button>
            <span className="py-4 px-6 rounded-lg">{amount}</span>
            <button
              className="bg-gray-200 py-2 px-4 rounded-lg text-orange-400  text-3xl"
              onClick={() => setAmount((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <button
            onClick={addItem}
            className="bg-orange-400 text-white font-semibold py-3 px-16 rounded-xl h-full"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
