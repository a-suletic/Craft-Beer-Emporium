import React, { useEffect } from 'react';
import Slider from '../components/Slider';
import Header from '../components/Header';
import IMAGE3 from '../images/beer_image_3.jpg';
import { Link } from 'react-router-dom';
import { useStore } from '../store/store';
import { useShallow } from 'zustand/react/shallow';

const LandingPage: React.FC = () => {
  const { fetchBeers, beers, getSelected } = useStore(
    useShallow((state) => ({
      fetchBeers: state.fetchBeers,
      beers: state.beers,
      getSelected: state.getSelected,
    }))
  );

  const getBeers = async () => {
    await fetchBeers();
  };

  useEffect(() => {
    getBeers();
  }, []);

  const selectBeer = (id: string) => {
    getSelected(id);
  };

  return (
    <>
      <Header />
      <div className="relative min-h-screen overflow-hidden">
        <Slider />
        <div className="relative z-10 overflow-y-auto h-screen p-28">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-28">
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
                  <h2 className=" text-white text-center w-full">
                    {item.name}
                  </h2>

                  <div className="flex-grow flex items-center justify-center w-full ">
                    <img
                      src={item.image ? item.image : IMAGE3}
                      alt="beer image"
                      className="object-cover rounded transition-transform duration-300 ease-in-out transform hover:scale-110 mx-auto "
                    />
                  </div>

                  <p className="absolute bottom-4 left-4 text-sm font-semibold">
                    {item.price}$
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
