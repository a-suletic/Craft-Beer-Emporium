import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../store/store';
import { useShallow } from 'zustand/react/shallow';

interface CardImageProps {
  beerId: string;
  name: string;
  beerImage: string;
}

function CardImage({ beerId, name, beerImage }: CardImageProps) {
  const { getSelected } = useStore(
    useShallow((state) => ({
      getSelected: state.getSelected,
    }))
  );
  const selectBeer = (id: string) => {
    getSelected(id);
  };
  return (
    <Link to={`/details`} onClick={() => selectBeer(beerId)} key={beerId}>
      <div className="flex-grow flex items-center justify-center w-full pb-4">
        <img
          src={beerImage}
          alt="beer image"
          className="object-cover rounded transition-transform duration-300 ease-in-out transform hover:scale-110 mx-auto"
        />
      </div>
      <p className="text-white text-left text-xl w-full">{name}</p>
    </Link>
  );
}

export default CardImage;
