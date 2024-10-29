import React, { useState } from 'react';
import { useStore } from '../store/store';
import Slider from '../components/Slider';
import IMAGE_BKG from '../images/beer_image_1.jpg';

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
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={selectedBeer?.image}
          alt="Beer Image"
          className="w-full h-auto max-w-lg object-cover rounded-xl shadow-lg"
        />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-4 p-4 lg:p-8 bg-white bg-opacity-70 rounded-lg">
        <div>
          <span className="text-orange-400 font-semibold">
            {selectedBeer.brand}
          </span>
          <h1 className="text-2xl md:text-3xl font-bold mt-1">
            {selectedBeer?.name}
          </h1>
          <p className="text-sm md:text-sm font-semibold">
            {selectedBeer?.tagline}
          </p>
        </div>

        <p className="text-gray-700">{selectedBeer?.description}</p>

        <p className="text-sm md:text-sm font-semibold">
          Tips: <br /> {selectedBeer?.tips}
        </p>
        <p className="text-xl md:text-sm font-semibold">
          Attenuation:{' '}
          <span className="text-xl md:text-sm italic">
            {selectedBeer?.attenuation}
          </span>
        </p>
        <p className="text-xl md:text-sm font-semibold">
          Style:{' '}
          <span className="text-xl md:text-sm ">{selectedBeer?.style}</span>
        </p>
        <p className="text-xl md:text-sm font-semibold">
          ABV: <span className="text-xl md:text-sm ">{selectedBeer?.abv}</span>
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

          <button
            onClick={addItem}
            className="bg-orange-400 text-white font-semibold py-3 px-10 lg:px-16 rounded-xl"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>

    // <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center bg-gray-400">
    //   <div className="flex flex-col gap-10 lg:w-2/4">
    //     <img
    //       src={selectedBeer?.image}
    //       alt=""
    //       className="w-full h-full aspect-square object-cover rounded-xl"
    //     />
    //   </div>
    //   <div className="flex flex-col gap-4 lg:w-2/4">
    //     <div>
    //       <span className=" text-orange-400 font-semibold">Special Beer</span>
    //       <h1 className="text-3xl font-bold">{selectedBeer?.name}</h1>
    //     </div>
    //     <p className="text-gray-700">{selectedBeer?.dsescription}</p>
    //     <h6 className="text-2xl font-semibold">{selectedBeer?.attenuation}</h6>
    //     <h6 className="text-2xl font-semibold">
    //       Tag Line: {selectedBeer?.tagline}
    //     </h6>
    //     <h6 className="text-2xl font-semibold">
    //       Brewers Tips: {selectedBeer?.brand}
    //     </h6>
    //     <div className="flex flex-row items-center gap-12">
    //       <div className="flex flex-row items-center">
    //         <button
    //           className="bg-gray-200 py-2 px-5 rounded-lg text-orange-400  text-3xl"
    //           onClick={() => setAmount((prev) => prev - 1)}
    //         >
    //           -
    //         </button>
    //         <span className="py-4 px-6 rounded-lg">{amount}</span>
    //         <button
    //           className="bg-gray-200 py-2 px-4 rounded-lg text-orange-400  text-3xl"
    //           onClick={() => setAmount((prev) => prev + 1)}
    //         >
    //           +
    //         </button>
    //       </div>
    //       <button
    //         onClick={addItem}
    //         className="bg-orange-400 text-white font-semibold py-3 px-16 rounded-xl h-full"
    //       >
    //         Add to Cart
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default DetailsPage;