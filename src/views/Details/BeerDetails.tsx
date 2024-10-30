import React from 'react';
import RatingBar from './Rating';
import { BeerType } from '../../types/beer_type';

interface BeerDetailsProps {
  selectedBeer: BeerType;
}

const BeerDetails: React.FC<BeerDetailsProps> = ({ selectedBeer }) => (
  <div>
    <span className="text-orange-400 font-semibold">{selectedBeer.brand}</span>
    <h1 className="text-2xl md:text-3xl font-bold mt-1">{selectedBeer.name}</h1>
    <p className="text-sm md:text-base font-semibold">{selectedBeer.tagline}</p>

    <RatingBar initialRating={Number(selectedBeer.rating)} />

    <p className="text-gray-700">{selectedBeer.description}</p>

    <p className="text-sm md:text-base font-semibold">
      Tips: <br /> {selectedBeer.tips}
    </p>
    <p className="text-xl md:text-lg font-semibold">
      Attenuation: <span className="italic">{selectedBeer.attenuation}</span>
    </p>
    <p className="text-xl md:text-lg font-semibold">
      Style: <span>{selectedBeer.style}</span>
    </p>
    <p className="text-xl md:text-lg font-semibold">
      ABV: <span>{selectedBeer.abv}</span>
    </p>
    <p className="text-xl md:text-xl font-semibold">
      Price: <span>{selectedBeer.price}$</span>
    </p>
  </div>
);

export default BeerDetails;
