import React, { useState } from 'react';
import IMAGE_BKG from '../../images/beer_image_2.jpg';
import { useStore } from '../../store/store';
import Button from '../../components/Button';
import { useShallow } from 'zustand/react/shallow';
import BeerImage from './BeerImage';
import BeerDetails from './BeerDetails';
import QuantityControl from './QuantityControl';

const DetailsPage = () => {
  const { setTotal, selectedBeer } = useStore(
    useShallow((state) => ({
      setTotal: state.setTotal,
      selectedBeer: state.selected,
    }))
  );

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
      <BeerImage image={selectedBeer?.image} />

      <div className="w-full lg:w-1/2 flex flex-col gap-4 p-4 lg:p-8 bg-white bg-opacity-70 rounded-lg">
        <BeerDetails selectedBeer={selectedBeer} />
        <QuantityControl amount={amount} setAmount={setAmount} />
        <Button onClick={addItem} variant="primary" size="medium">
          Buy
        </Button>
      </div>
    </div>
  );
};

export default DetailsPage;
