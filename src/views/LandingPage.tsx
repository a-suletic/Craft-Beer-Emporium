import React, { useEffect, useState } from 'react';
import Slider from '../components/Slider';
import Header from '../components/Header';
import IMAGE3 from '../images/beer_image_3.jpg';
import { Link } from 'react-router-dom';
import { useStore } from '../store/store';
import { useShallow } from 'zustand/react/shallow';

const beerStyles = ['IPA', 'Stout', 'Lager', 'Pilsner', 'Ale', 'Porter'];
const breweries = [
  'BrewDog',
  'Stone Brewing',
  'Sierra Nevada',
  'Lagunitas',
  'Founders',
  'Dogfish Head',
];
const orderby = ['A to Z', 'Z to A'];

const LandingPage: React.FC = () => {
  const {
    fetchBeers,
    beers,
    getSelected,
    filterByPrice,
    filterByAbv,
    filterByStyle,
    filterByBrand,
    sortOrder,
    currentPrice,
    currentAbv,
    currentStyle,
    currentBrand,
    currentOrder,
  } = useStore(
    useShallow((state) => ({
      fetchBeers: state.fetchBeers,
      beers: state.displayBeers,
      getSelected: state.getSelected,
      filterByPrice: state.filterByPrice,
      filterByAbv: state.filterByAbv,
      filterByStyle: state.filterByStyle,
      filterByBrand: state.filterByBrand,
      sortOrder: state.sortOrder,
      currentPrice: state.filterPrice,
      currentAbv: state.filterAbv,
      currentStyle: state.filterStyle,
      currentBrand: state.filterBrand,
      currentOrder: state.filterOrder,
    }))
  );

  // const [selectedStyle, setSelectedStyle] = useState<string>('');
  // const [selectedBreweries, setSelectedBreweries] = useState<string>('');
  // const [selectedPrice, setSelectedPrice] = useState<number>(100);
  // const [selectedAbv, setSelectedAbv] = useState<number>(12);

  const getBeers = async () => {
    await fetchBeers();
  };

  useEffect(() => {
    getBeers();
  }, []);

  const selectBeer = (id: string) => {
    getSelected(id);
  };

  const handleStyleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //setSelectedStyle(event.target.value);
    console.log(event.target.value);
    filterByStyle(event.target.value);
  };

  const handleBreweriesChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    filterByBrand(event.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //setSelectedPrice(Number(e.target.value));
    filterByPrice(e.target.value);
  };

  const handleAbvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //setSelectedAbv(Number(e.target.value));
    filterByAbv(Number(e.target.value));
  };

  const handleOrderBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let orderBy = 'asc';
    if (e.target.value === 'Z to A') {
      orderBy = 'desc';
    }
    sortOrder(orderBy);
  };

  return (
    <>
      <Header />
      <div className="relative min-h-screen overflow-hidden p-4 md:p-8 z-10 ">
        <Slider />

        {/* Filter section */}
        <div className="relative flex flex-wrap gap-12 items-center px-12 pt-24">
          <select
            value={currentStyle}
            onChange={handleStyleChange}
            className="p-2 rounded-full bg-white bg-opacity-50 text-gray-700 w-40 z-10"
          >
            <option value="">All Styles</option>
            {beerStyles.map((style) => (
              <option key={style} value={style}>
                {style}
              </option>
            ))}
          </select>

          <select
            value={currentBrand}
            onChange={handleBreweriesChange}
            className="p-2 rounded-full bg-white bg-opacity-50 text-gray-700 w-40 z-10"
          >
            <option value="">All Breweries</option>
            {breweries.map((brewer) => (
              <option key={brewer} value={brewer}>
                {brewer}
              </option>
            ))}
          </select>

          <select
            value={currentOrder === 'asc' ? 'A to Z' : 'Z to A'}
            onChange={handleOrderBy}
            className="p-2 rounded-full bg-white bg-opacity-50 text-gray-700 w-40 z-10"
          >
            <option value="">Order By</option>
            {orderby.map((order) => (
              <option key={order} value={order}>
                {order}
              </option>
            ))}
          </select>

          <div className="flex items-center z-10">
            <label htmlFor="price" className="text-white mr-2">
              Max Price: ${currentPrice}
            </label>
            <input
              id="price"
              type="range"
              min="10"
              max="100"
              step="1"
              value={currentPrice}
              onChange={handlePriceChange}
              className="w-40"
            />
          </div>

          <div className="flex items-center z-10">
            <label htmlFor="price" className="text-white mr-2">
              Max ABV%: {currentAbv}
            </label>
            <input
              id="price"
              type="range"
              min="3"
              max="13"
              step="0.5"
              value={currentAbv}
              onChange={handleAbvChange}
              className="w-40"
            />
          </div>
        </div>

        {/* Beer grid */}
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
                    className="object-cover rounded transition-transform duration-300 ease-in-out transform hover:scale-110 mx-auto "
                  />
                </div>
                <p className="text-white text-left text-sm w-full">
                  {item.name}
                </p>

                <p className=" bottom-4 text-right text-orange-200 text-sm font-semibold">
                  {item.price}$
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
