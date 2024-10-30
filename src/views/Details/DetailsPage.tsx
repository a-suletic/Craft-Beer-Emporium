import React, { useState } from 'react';
import IMAGE_BKG from '../../images/beer_image_2.jpg';
import { useStore } from '../../store/store';
import RatingBar from './Rating';
import Button from '../../components/Button';

function DetailsPage() {
  const setTotal = useStore((state) => state.setTotal);
  const selectedBeer = useStore((state) => state.selected);

  const [amount, setAmount] = useState(1);

  const addItem = () => {
    setTotal(amount);
  };

  return (
    <div
      className="flex flex-col lg:flex-row items-start lg:items-center bg-cover bg-center h-screen w-screen p-4 lg:p-8"
      style={{
        backgroundImage: `url(${IMAGE_BKG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* beer image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={selectedBeer?.image}
          alt="Beer Image"
          className="w-[120%] h-auto max-w-lg object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* beer details */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4 p-4 lg:p-8 bg-white bg-opacity-70 rounded-lg">
        <div>
          <span className="text-orange-400 font-semibold">
            {selectedBeer.brand}
          </span>
          <h1 className="text-2xl md:text-3xl font-bold mt-1">
            {selectedBeer?.name}
          </h1>
          <p className="text-sm md:text-base font-semibold">
            {' '}
            {selectedBeer?.tagline}
          </p>
        </div>

        <RatingBar initialRating={Number(selectedBeer.rating)} />

        <p className="text-gray-700">{selectedBeer?.description}</p>

        <p className="text-sm md:text-base font-semibold">
          Tips: <br /> {selectedBeer?.tips}
        </p>
        <p className="text-xl md:text-lg font-semibold">
          Attenuation:{' '}
          <span className="text-xl md:text-lg italic">
            {selectedBeer?.attenuation}
          </span>
        </p>
        <p className="text-xl md:text-lg font-semibold">
          Style:{' '}
          <span className="text-xl md:text-lg ">{selectedBeer?.style}</span>
        </p>
        <p className="text-xl md:text-lg font-semibold">
          ABV: <span className="text-xl md:text-lg ">{selectedBeer?.abv}</span>
        </p>
        <p className="text-xl md:text-xl font-semibold">
          Price:{' '}
          <span className="text-xl md:text-xl font-semibold">
            {selectedBeer?.price}$
          </span>
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <div className="flex flex-row items-center gap-4">
            <button
              className="bg-gray-200 py-2 px-4 rounded-lg text-orange-400 text-3xl"
              onClick={() => setAmount((prev) => prev - 1)}
            >
              -
            </button>
            <span className="py-4 px-6 rounded-lg text-xl">{amount}</span>
            <button
              className="bg-gray-200 py-2 px-4 rounded-lg text-orange-400 text-3xl"
              onClick={() => setAmount((prev) => prev + 1)}
            >
              +
            </button>
          </div>

          <Button onClick={addItem} variant="primary" size="medium">
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
