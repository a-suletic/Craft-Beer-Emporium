import React from 'react';
import { BeerType } from '../../types/beer_type';
import CardImage from './CardImage';
import CardDetails from './CardDetails';

interface BeerCardProps {
  beer: BeerType;
}

function BeerCard({ beer }: BeerCardProps) {
  return (
    <div
      key={beer.id}
      className="flex flex-col items-center justify-between h-full p-2 rounded bg-white bg-opacity-20 text-white shadow-md relative cursor-pointer"
    >
      <CardImage beerId={beer.id} beerImage={beer.image} name={beer.name} />
      <CardDetails price={beer.price} />
    </div>
  );
}

export default BeerCard;
