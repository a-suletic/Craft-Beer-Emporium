import React from 'react';
import { useStore } from '../../../store/store';
import { useShallow } from 'zustand/react/shallow';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import IMAGE3 from '../../../images/beer_image_3.jpg';

function GreedBeer() {
  const { fetchBeers, beers, getSelected, setTotal } = useStore(
    useShallow((state) => ({
      fetchBeers: state.fetchBeers,
      beers: state.displayBeers,
      getSelected: state.getSelected,
      setTotal: state.setTotal,
    }))
  );

  const selectBeer = (id: string) => {
    getSelected(id);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-28 p-12">
      {beers.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-between h-full p-2 rounded bg-white bg-opacity-20 text-white shadow-md relative cursor-pointer"
        >
          <Link
            to={`/details`}
            onClick={() => selectBeer(item.id)}
            key={item.id}
          >
            <div className="flex-grow flex items-center justify-center w-full pb-4">
              <img
                src={item.image ? item.image : IMAGE3}
                alt="beer image"
                className="object-cover rounded transition-transform duration-300 ease-in-out transform hover:scale-110 mx-auto"
              />
            </div>
            <p className="text-white text-left text-xl w-full">{item.name}</p>
          </Link>

          <div className="flex justify-between items-center w-full mt-auto pt-4">
            <Button onClick={() => setTotal(1)} variant="primary" size="small">
              Buy
            </Button>
            <div className="text-orange-200 text-xl font-semibold">
              {item.price}$
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GreedBeer;
