import React, { useState } from 'react';
import Sidebar from './Sidebar';
import BeerGraphs from './Graphs/beer-graph';
import GenericTable from './BeerTable';
import { BeerType } from '../../types/beer_type';
import { COLUMNS_BEER } from '../../utils/constants';
import { useStore } from '../../store/store';
import AddBeerModal from './AddBeerModal';
import { useShallow } from 'zustand/react/shallow';

const columns = COLUMNS_BEER;

function ManagementPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const { beers, addBeer, removeBeer, setSelectedForEdit, updateBeer } =
    useStore(
      useShallow((state) => ({
        beers: state.displayBeers,
        addBeer: state.addBeer,
        removeBeer: state.removeBeer,
        setSelectedForEdit: state.setSelectedForEdit,
        updateBeer: state.updateBeer,
      }))
    );

  const handleEdit = (beer: BeerType) => {
    setIsEdit(true);
    setSelectedForEdit(beer);
    setIsModalOpen(true);
  };

  const handleDelete = (beer: BeerType) => {
    removeBeer(beer.id);
  };

  const handleAddBeer = (newBeer: BeerType) => {
    isEdit ? updateBeer(newBeer) : addBeer(newBeer);
    setIsEdit(false);
  };

  const onClose = () => {
    setIsModalOpen(false);
    setIsEdit(false);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100 overflow-y-auto">
        {/* <h1 className="text-2xl font-bold px-5 pt-6 pb-2">Top 10 Beer Sales</h1> */}
        <BeerGraphs />
        <div className="w-40 px-4 pt-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-orange-400 text-white py-3 lg:px-4 rounded-md"
          >
            New Beer
          </button>
        </div>

        <GenericTable<BeerType>
          columns={columns}
          data={beers}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <AddBeerModal
          isOpen={isModalOpen}
          onClose={onClose}
          onAdd={handleAddBeer}
          isEdit={isEdit}
        />
      </div>
    </div>
  );
}

export default ManagementPage;
