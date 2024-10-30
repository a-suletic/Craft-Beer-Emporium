import React from 'react';

interface QuantityControlProps {
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
}

const QuantityControl: React.FC<QuantityControlProps> = ({
  amount,
  setAmount,
}) => (
  <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
    <div className="flex flex-row items-center gap-4">
      <button
        className="bg-gray-200 py-2 px-4 rounded-lg text-orange-400 text-3xl"
        onClick={() => setAmount((prev) => Math.max(prev - 1, 1))}
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
  </div>
);

export default QuantityControl;
