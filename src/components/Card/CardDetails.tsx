import React from 'react';
import Button from '../Button';
import { useStore } from '../../store/store';
import { useShallow } from 'zustand/react/shallow';

interface CardDetailsProps {
  price: string;
}

function CardDetails({ price }: CardDetailsProps) {
  const { setTotal } = useStore(
    useShallow((state) => ({
      setTotal: state.setTotal,
    }))
  );
  return (
    <div className="flex justify-between items-center w-full mt-auto pt-4">
      <Button onClick={() => setTotal(1)} variant="primary" size="small">
        Buy
      </Button>
      <div className="text-orange-200 text-xl font-semibold">{price}$</div>
    </div>
  );
}

export default CardDetails;
